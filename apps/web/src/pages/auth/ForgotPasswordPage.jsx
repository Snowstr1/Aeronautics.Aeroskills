import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2, MailCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import AuthLayout, { Field, inputClass, submitButtonClass } from './AuthLayout.jsx';

const formSchema = z.object({
  email: z.string().trim().email('Enter a valid email address'),
});

const footer = (
  <Link to="/login" className="font-semibold text-primary hover:text-accent transition-colors">
    Back to log in
  </Link>
);

const ForgotPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { resetPassword } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async ({ email }) => {
    setIsSubmitting(true);
    try {
      const { error } = await resetPassword(email);
      if (error) {
        toast.error('Could not send reset link', { description: error.message });
        return;
      }
      setIsSent(true);
    } catch (error) {
      toast.error('Could not send reset link', { description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <AuthLayout pageTitle="Forgot password" title="Check your email" footer={footer}>
        <div className="text-center space-y-4">
          <span className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent">
            <MailCheck className="w-7 h-7" aria-hidden="true" />
          </span>
          <p className="text-muted-foreground">If an account exists, a reset link is on its way.</p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      pageTitle="Forgot password"
      title="Forgot password?"
      subtitle="Enter your email and we'll send you a link to reset it."
      footer={footer}
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

        <button type="submit" disabled={isSubmitting} className={submitButtonClass}>
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
          {isSubmitting ? 'Sending…' : 'Send reset link'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
