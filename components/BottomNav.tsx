
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const NavItem: React.FC<{
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClass = 'text-primary';
  const inactiveClass = 'text-text-muted-light dark:text-text-muted-dark';
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 ${isActive ? activeClass : inactiveClass}`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 h-20 w-full max-w-md mx-auto bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 flex items-center justify-around">
      <NavItem
        label="Découvrir"
        icon="pin_drop"
        isActive={activeScreen === Screen.Encounters}
        onClick={() => onNavigate(Screen.Encounters)}
      />
      <NavItem
        label="Messages"
        icon="forum"
        isActive={activeScreen === Screen.Messages}
        onClick={() => onNavigate(Screen.Messages)}
      />
      <NavItem
        label="Profil"
        icon="account_circle"
        isActive={activeScreen === Screen.Profile}
        onClick={() => onNavigate(Screen.Profile)}
      />
    </nav>
  );
};

export default BottomNav;
