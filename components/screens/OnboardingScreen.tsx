
import React from 'react';

interface OnboardingScreenProps {
  onNavigate: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-grow w-full h-full justify-between p-6">
      <header className="flex justify-center items-center py-4">
        <h1 className="text-2xl font-bold text-primary">Aka-aki</h1>
      </header>

      <main className="flex flex-col flex-grow justify-center items-center text-center">
        <div className="w-full max-w-[280px] sm:max-w-xs aspect-square px-4 mb-4">
          <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdBFPyuMVKRmkECPnLs_Jra4iKd1iv9Z7H8UJMQB_5mMSlM4K0n-Eq3-p711hfGikMZBmtQjnrXOUPOUIFUlZY1CgMEG3ofCsC4KOF90Y-_EzoyfXoN2h4Fu_0Or3kFucECDSXrqXjaE5xus_lbB9k7dN3iv_8oE_Kwcx6QwG2dzQ644gwt76E7w139OVwmeiw9zdX6v2kmsObWO_8xRskjPLwCx0_PoGKSLXRFlnWvoMFAl4VP-RL8DoaLen6JCrP9ERk6hd5b48")'}}></div>
        </div>
        <h1 className="text-text-light dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 pb-3 pt-6">Découvrez qui est autour de vous</h1>
        <p className="text-text-light dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4">
          Aka-aki utilise votre localisation pour vous montrer d'autres utilisateurs à proximité et vous aider à vous connecter en fonction d'intérêts communs.
        </p>
        <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-[#cfdfe7] dark:bg-gray-600"></div>
          <div className="h-2 w-2 rounded-full bg-[#cfdfe7] dark:bg-gray-600"></div>
        </div>
      </main>
      
      <footer className="w-full pt-6 pb-2">
        <div className="flex flex-col space-y-4">
          <button onClick={onNavigate} className="w-full text-white bg-primary font-bold py-4 px-6 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-300">
            Créer un compte
          </button>
          <button onClick={onNavigate} className="w-full text-text-light dark:text-white font-bold py-4 px-6 rounded-full hover:bg-gray-200 dark:hover:bg-background-dark/80 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300">
            Se connecter
          </button>
        </div>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6 px-4">
          En continuant, vous acceptez que nous utilisions vos services de localisation pour améliorer votre expérience.
        </p>
      </footer>
    </div>
  );
};

export default OnboardingScreen;
