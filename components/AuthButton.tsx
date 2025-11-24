'use client';

import { useAuth } from '@/lib/AuthContext';

export default function AuthButton() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) {
    return null;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="w-8 h-8 rounded-full border border-gray-300"
            />
          )}
          <span className="text-sm">{user.displayName}</span>
        </div>
        <button
          onClick={signOut}
          className="text-sm underline hover:no-underline transition-all"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="text-sm underline hover:no-underline transition-all"
    >
      Sign In with Google
    </button>
  );
}
