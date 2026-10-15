import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import AuthLayout, { Field, inputClass, submitButtonClass } from './AuthLayout.jsx';

const formSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const ResetPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, loading, updatePassword } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async ({ password }) => {
    setIsSubmitting(true);
    try {
      const { error } = await updatePassword(password);
      if (error) {
        toast.error('Could not update password', { description: error.message });
        return;
      }
      toast.success('Password updated');
      navigate('/account', { replace: true });
    } catch (error) {
      toast.error('Could not update password', { description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // The reset link signs the user in from the URL; wait for that before deciding.
  if (loading) {
    return (
      <AuthLayout pageTitle="Reset password" title="Reset password">
        <div className="flex justify-center py-6" role="status">
          <Loader2 className="w-8 h-8 animate-spin text-primary" aria-hidden="true" />
          <span className="sr-only">Loading…</span>
        </div>
      </AuthLayout>
    );
  }

  if (!user) {
    return (
      <AuthLayout
        pageTitle="Reset password"
        title="Link expired"
        subtitle="This reset link is invalid or has expired. Request a new one to continue."
      >
        <Link to="/forgot-password" className={submitButtonClass}>
          Send a new link
        </Link>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout pageTitle="Reset password" title="Set a new password" subtitle={`For ${user.email}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <Field id="password" label="New password" error={errors.password}>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby={errors.password ? 'password-error' : undefined}
            className={inputClass}
            {...register('password')}
          />
        </Field>

        <Field id="confirmPassword" label="Confirm new password" error={errors.confirmPassword}>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
            className={inputClass}
            {...register('confirmPassword')}
          />
        </Field>

        <button type="submit" disabled={isSubmitting} className={submitButtonClass}>
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
          {isSubmitting ? 'Saving…' : 'Update password'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
