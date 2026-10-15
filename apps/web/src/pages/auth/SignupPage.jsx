import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2, MailCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import AuthLayout, { Field, PasswordInput, inputClass, submitButtonClass } from './AuthLayout.jsx';

const formSchema = z
  .object({
    fullName: z.string().trim().min(2, 'Name must be at least 2 characters'),
    email: z.string().trim().email('Enter a valid email address'),
    phone: z.string().trim().min(8, 'Enter a valid phone number'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const fields = [
  { name: 'fullName', label: 'Full name', type: 'text', autoComplete: 'name', placeholder: 'John Doe' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', placeholder: '+976 9911 2233' },
  { name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password', placeholder: 'At least 8 characters' },
  { name: 'confirmPassword', label: 'Confirm password', type: 'password', autoComplete: 'new-password' },
];

const loginFooter = (
  <>
    Already have an account?{' '}
    <Link to="/login" className="font-semibold text-primary hover:text-accent transition-colors">
      Log in
    </Link>
  </>
);

const SignupPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState(null);
  const { user, loading, signUp } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  if (!loading && user && !sentTo) {
    return <Navigate to="/account" replace />;
  }

  const onSubmit = async ({ fullName, email, phone, password }) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await signUp({ email, password, fullName, phone });
      if (error) {
        toast.error('Sign up failed', { description: error.message });
        return;
      }
      // With email confirmation turned off, Supabase signs the user in right away.
      if (data.session) {
        navigate('/account', { replace: true });
        return;
      }
      setSentTo(email);
    } catch (error) {
      toast.error('Sign up failed', { description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sentTo) {
    return (
      <AuthLayout pageTitle="Sign up" title="Check your email" footer={loginFooter}>
        <div className="text-center space-y-4">
          <span className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent">
            <MailCheck className="w-7 h-7" aria-hidden="true" />
          </span>
          <p className="text-muted-foreground">
            We sent a confirmation link to <span className="font-semibold text-foreground">{sentTo}</span>.
            Open it to activate your account.
          </p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      pageTitle="Sign up"
      title="Create an account"
      subtitle="Register to enrol in courses and book exams."
      footer={loginFooter}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {fields.map(({ name, label, type, ...inputProps }) => {
          const isPassword = type === 'password';
          const Input = isPassword ? PasswordInput : 'input';
          return (
            <Field key={name} id={name} label={label} error={errors[name]}>
              <Input
                id={name}
                type={isPassword ? undefined : type}
                aria-invalid={errors[name] ? 'true' : 'false'}
                aria-describedby={errors[name] ? `${name}-error` : undefined}
                className={inputClass}
                {...inputProps}
                {...register(name)}
              />
            </Field>
          );
        })}

        <button type="submit" disabled={isSubmitting} className={submitButtonClass}>
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
          {isSubmitting ? 'Creating account…' : 'Sign up'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
