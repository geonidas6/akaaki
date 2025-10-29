
import React, { useState, useCallback } from 'react';
import OnboardingScreen from './components/screens/OnboardingScreen';
import AuthScreen from './components/screens/AuthScreen';
import EncountersScreen from './components/screens/EncountersScreen';
import MessagesScreen from './components/screens/MessagesScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import BottomNav from './components/BottomNav';
import NearbySearchScreen from './components/screens/NearbySearchScreen';
import NearbyGridScreen from './components/screens/NearbyGridScreen';
import { Screen } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.Onboarding);

  const navigate = useCallback((newScreen: Screen) => {
    setScreen(newScreen);
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case Screen.Onboarding:
        return <OnboardingScreen onNavigate={() => navigate(Screen.Auth)} />;
      case Screen.Auth:
        return <AuthScreen onNavigate={() => navigate(Screen.Encounters)} />;
      case Screen.Encounters:
        return <EncountersScreen onNavigate={navigate} />;
      case Screen.Messages:
        return <MessagesScreen />;
      case Screen.Profile:
        return <ProfileScreen />;
      case Screen.NearbySearch:
        return <NearbySearchScreen onNavigate={navigate} />;
      case Screen.NearbyGrid:
        return <NearbyGridScreen />;
      default:
        return <OnboardingScreen onNavigate={() => navigate(Screen.Auth)} />;
    }
  };
  
  const isMainScreen = [Screen.Encounters, Screen.Messages, Screen.Profile].includes(screen);

  return (
    <div className="relative w-full h-full min-h-screen font-display text-text-light dark:text-gray-200">
      <div className="w-full max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
        <div className={`flex-grow ${isMainScreen ? 'pb-20' : ''}`}>
          {renderScreen()}
        </div>
        {isMainScreen && <BottomNav activeScreen={screen} onNavigate={navigate} />}
      </div>
    </div>
  );
};

export default App;
