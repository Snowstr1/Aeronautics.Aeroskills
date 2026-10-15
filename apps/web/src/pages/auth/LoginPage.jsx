import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import AuthLayout, { Field, PasswordInput, inputClass, submitButtonClass } from './AuthLayout.jsx';

const formSchema = z.object({
  email: z.string().trim().email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Send the user back to the page that bounced them to /login, if any.
const getRedirectPath = (from) =>
  from?.pathname ? `${from.pathname}${from.search || ''}${from.hash || ''}` : '/account';

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, loading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = getRedirectPath(location.state?.from);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  if (!loading && user) {
    return <Navigate to={redirectPath} replace />;
  }

  const onSubmit = async ({ email, password }) => {
    setIsSubmitting(true);
    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast.error('Login failed', { description: error.message });
        return;
      }
      navigate(redirectPath, { replace: true });
    } catch (error) {
      toast.error('Login failed', { description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      pageTitle="Log in"
      title="Welcome back"
      subtitle="Log in to access your courses and exams."
      footer={
        <>
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-primary hover:text-accent transition-colors">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass}
            {...register('email')}
          />
        </Field>

        <Field
          id="password"
          label="Password"
          error={errors.password}
        >
          <PasswordInput
            id="password"
            autoComplete="current-password"
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby={errors.password ? 'password-error' : undefined}
            className={inputClass}
            {...register('password')}
          />
          <div className="mt-2 flex justify-end">
            <Link to="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
        </Field>

        <button type="submit" disabled={isSubmitting} className={submitButtonClass}>
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
          {isSubmitting ? 'Logging in…' : 'Log in'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
