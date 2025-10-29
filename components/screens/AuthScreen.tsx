
import React, { useState } from 'react';

interface AuthScreenProps {
  onNavigate: () => void;
}

const PasswordInput: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex w-full flex-1 items-stretch">
      <input
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal transition-all duration-300"
        placeholder={placeholder}
        type={visible ? 'text' : 'password'}
      />
      <button
        aria-label="Toggle password visibility"
        onClick={() => setVisible(!visible)}
        className="text-slate-500 dark:text-slate-400 flex border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 items-center justify-center px-4 rounded-r-lg border-l-0"
      >
        <span className="material-symbols-outlined text-2xl">{visible ? 'visibility_off' : 'visibility'}</span>
      </button>
    </div>
  );
};

const AuthScreen: React.FC<AuthScreenProps> = ({ onNavigate }) => {
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');

  return (
    <div className="flex w-full flex-col items-center p-4 pt-16">
      <div className="flex items-center justify-center h-16 w-16 bg-primary/20 rounded-lg mb-4">
        <span className="material-symbols-outlined text-primary text-4xl">near_me</span>
      </div>
      <h1 className="text-text-light dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-2">Discover your community</h1>
      <p className="text-slate-500 dark:text-slate-400 text-base text-center mb-6">Join now to connect with people nearby.</p>
      
      <div className="w-full px-4 py-3">
        <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-slate-200 dark:bg-background-dark p-1">
          <button onClick={() => setAuthMode('signup')} className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal transition-all duration-300 ${authMode === 'signup' ? 'bg-white dark:bg-slate-700 shadow-sm text-text-light dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
            Create Account
          </button>
          <button onClick={() => setAuthMode('login')} className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal transition-all duration-300 ${authMode === 'login' ? 'bg-white dark:bg-slate-700 shadow-sm text-text-light dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
            Log In
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-text-light dark:text-slate-200 text-base font-medium leading-normal pb-2">Email</p>
          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] text-base font-normal leading-normal transition-all duration-300" placeholder="yourname@email.com" />
        </label>
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-text-light dark:text-slate-200 text-base font-medium leading-normal pb-2">Password</p>
          <PasswordInput placeholder="Choose a secure password" />
        </label>
        {authMode === 'signup' && (
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-text-light dark:text-slate-200 text-base font-medium leading-normal pb-2">Confirm Password</p>
            <PasswordInput placeholder="Re-enter your password" />
          </label>
        )}
        {authMode === 'login' && <a className="text-primary text-sm font-medium self-end mt-2" href="#">Forgot Password?</a>}
      </div>

      <div className="w-full px-4 py-3">
        <button onClick={onNavigate} className="flex h-14 items-center justify-center gap-x-2 rounded-lg text-white font-bold text-base leading-normal tracking-wide w-full bg-primary hover:bg-primary/90 active:scale-95 transition-all duration-200">
          {authMode === 'signup' ? 'Sign Up' : 'Log In'}
        </button>
      </div>
      
      <p className="text-slate-500 dark:text-slate-400 text-xs text-center px-8">
        By signing up, you agree to our <a className="font-semibold text-primary/80 hover:text-primary" href="#">Terms</a> and <a className="font-semibold text-primary/80 hover:text-primary" href="#">Privacy Policy</a>.
      </p>

      <div className="flex w-full items-center gap-x-4 px-4 py-8">
        <div className="h-px grow bg-slate-200 dark:bg-slate-700"></div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Or continue with</p>
        <div className="h-px grow bg-slate-200 dark:bg-slate-700"></div>
      </div>

      <div className="flex w-full items-center justify-center gap-x-4 px-4">
        {['Google', 'Apple', 'Facebook'].map((brand) => (
          <button key={brand} aria-label={`Continue with ${brand}`} className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 active:scale-95 transition-all duration-200">
             <img alt={`${brand} logo`} className={`h-6 w-6 ${brand === 'Apple' ? 'dark:invert' : ''}`} src={`https://picsum.photos/seed/${brand}/24/24`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AuthScreen;
