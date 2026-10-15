import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ClipboardCheck, GraduationCap, Loader2, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { supabase } from '@/lib/supabase.js';
import AuthLayout from './AuthLayout.jsx';

const quickLinks = [
  { label: 'Courses', description: 'Browse aviation training programs', path: '/training#courses', icon: GraduationCap },
  { label: 'Exams', description: 'Assessments and examinations', path: '/training#exams', icon: ClipboardCheck },
];

const AccountPage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    if (!user) return undefined;
    let isMounted = true;

    supabase
      .from('profiles')
      .select('full_name, phone')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!isMounted) return;
        if (error) console.error('Could not load profile', error);
        setProfile(data);
      });

    return () => {
      isMounted = false;
    };
  }, [user]);

  const metadata = user?.user_metadata ?? {};
  const fullName = profile?.full_name || metadata.full_name;
  const phone = profile?.phone || metadata.phone;

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      const { error } = await signOut();
      if (error) {
        toast.error('Log out failed', { description: error.message });
        return;
      }
      navigate('/', { replace: true });
    } catch (error) {
      toast.error('Log out failed', { description: error.message });
    } finally {
      setIsSigningOut(false);
    }
  };

  const details = [
    { label: 'Name', value: fullName },
    { label: 'Email', value: user?.email },
    { label: 'Phone', value: phone },
  ];

  return (
    <AuthLayout
      pageTitle="My account"
      title={fullName ? `Hello, ${fullName.split(' ')[0]}` : 'My account'}
      subtitle="Manage your account and training."
    >
      <dl className="divide-y divide-border rounded-lg border border-border">
        {details.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-4 px-4 py-3">
            <dt className="text-sm text-muted-foreground">{label}</dt>
            <dd className="text-sm font-medium text-foreground text-right break-all">{value || '—'}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-6 space-y-2">
        {quickLinks.map(({ label, description, path, icon: Icon }) => (
          <li key={path}>
            <Link
              to={path}
              className="group flex items-center gap-3 p-3 rounded-lg border border-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-foreground">{label}</span>
                <span className="text-sm text-muted-foreground">{description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60"
      >
        {isSigningOut
          ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
          : <LogOut className="w-5 h-5" aria-hidden="true" />}
        Log out
      </button>
    </AuthLayout>
  );
};

export default AccountPage;
