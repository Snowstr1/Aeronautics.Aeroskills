import React, { forwardRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Eye, EyeOff } from 'lucide-react';

export const inputClass =
  'w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground ' +
  'transition-colors focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ' +
  'aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:ring-destructive/20';

export const submitButtonClass =
  'w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground ' +
  'shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ' +
  'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

export const Field = ({ id, label, error, action, children }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {action}
    </div>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-sm text-destructive">
        {error.message}
      </p>
    )}
  </div>
);

// The password is visible only while the eye button is held down (pointer, Space or Enter).
export const PasswordInput = forwardRef(({ className = inputClass, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      show();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === ' ' || event.key === 'Enter') hide();
  };

  const Icon = isVisible ? EyeOff : Eye;

  return (
    <div className="relative">
      <input ref={ref} {...props} type={isVisible ? 'text' : 'password'} className={`${className} pr-12`} />
      <button
        type="button"
        tabIndex={0}
        aria-label="Hold to show password"
        onPointerDown={(event) => {
          // Keep focus and the cursor position in the input.
          event.preventDefault();
          show();
        }}
        onPointerUp={hide}
        onPointerLeave={hide}
        onPointerCancel={hide}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={hide}
        className="absolute inset-y-0 right-0 flex items-center justify-center w-12 rounded-r-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 select-none touch-none"
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
});

const AuthLayout = ({ pageTitle, title, subtitle, footer, children }) => (
  <main className="min-h-[calc(100vh-5rem)] bg-muted px-4 py-16 sm:py-20 flex flex-col items-center justify-center">
    <Helmet>
      <title>{`${pageTitle || title} | Aeronautics LLC Mongolia`}</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <div className="w-full max-w-md">
      <div className="rounded-2xl bg-white shadow-xl border border-border border-t-4 border-t-accent p-8 sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary">{title}</h1>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>

      {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
    </div>
  </main>
);

export default AuthLayout;
