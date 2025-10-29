
import React, { useState, useEffect } from 'react';
import { Screen } from '../../types';

interface NearbySearchScreenProps {
  onNavigate: (screen: Screen) => void;
}

const user = { name: 'Sophie', age: 24, distance: '2m away', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1zIDTkfHoR3ouwoMW8NFnVdyz5fi27o_V0bPCOI75mN56feyufuS3jsWgTcWaxvfjLCtM9lfoiai8Kr7JF1if33cHPeW-z76QTIGQuwGe00n9JhC865M9NKih4kQynBJqbQzV7XDkH49rqai61KbV58-86CQIdM6CYaJo6tPnWql8hIJERluMwq8RUZtFdso_SjeT6gVNjKIXScb6jBtSdKK2a7kEymKZVffPv6k_LA1QSnzLtBB24y-hwUDa2FF0CeJUSO-R1SQ', interests: ['Music', 'Art', 'Foodie'], interestIcons: ['music_note', 'brush', 'ramen_dining'] };

const otherUsers = [
    { name: 'Alex, 28', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxSl6VoKXu1DkcjFR3b8pEs_sYtVtvFG_saSVmbJsbYW1wEyRmljIgYVCweN6bGSkHOH3XaaNpDZDclAUdVYeMWqycUARQweZeD9uo6Z9jo-1e1-a0CWPDqDS43lPmPdqGONAwXzN6VBlLJYZdOHeFvu6ZYVABipcp_IOhg7AtWGnw5UIiIYm0DEKDSirUW75zLm-lGve9qpbSy3lS62M4qyocHck8JSUV9fKqQMFuJVOfiEbt0j2uvRDYutdMVEnTqhBXjPNJVOg' },
    { name: 'Mia, 22', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG8dNVHdbnANKRttnNdu-3QScetnSnDlkSxRyGilhOMiRBP-1gSYpAnhTVDwevvIN-ffTsacuelsNEPDfp68NqSaNjEwjgHnSd_tfPWzac6Sf_v8cV67kg5DWZ0l3uvzy-mgR-b2lk96xOOnp1D0YSbNt_BgSBSACmjvg-pe9T6AJIqp0VUSmpyX1zQbUIxqjQ5nG8UyOkRc8UqknAHlqHIPXvalTrj8px9jN13Rq8Jv3IrUCqkY3vH2vKKvJvj1yrAI_kWm29KsE' },
    { name: 'Leo, 31', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3WEUvue4iroYMH2W9LNmmZ1cW4fKxxFcFxLPWkF8gbV9LM8FqNL9L4If3Daka157RpJNtqVjSybkARJegGghvayWzyZU-Xw3aGQ-p-FFcr1lUXXiWt89QHuhn-butdepByM_41D0tYkaXeB-_fVNT-aKHhblm4yHq8oUveX3bGqFdpCAkErb0eNcU03hd7w8E3pzwBsvRCW9nJtoGtk_yNaJzpqfvJK2OZlVMeWFGWgbRpIOe3d6jbzEmL4DcEsqk3NGeTm_vgwg' },
    { name: 'Chloe, 25', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDng2qZk_v8NgSQDZfp4wB4TBs9Bq7liVMDg2L7bgyHBf_V8O_jMOMFqep789u9ymQ6T5WHLFlYeQs9AWT1kOmIdItOhhtyMHT-K5cT9V8_InbLBxE_IF3J-dpiAFHZvIwsbeent40IcxbNxWAqUd9uwtLMwf07V-oA6QAdwidUBKz35AUcHiCl2aURYth3gV63m0LWMxYzbg54xDrkE51ng2vNqerPNYG-RupngkZROsTuiUNn_Hbl5n8joEDM9SasbT-cDbjEyaA' },
]

const NearbySearchScreen: React.FC<NearbySearchScreenProps> = ({onNavigate}) => {
    const [foundUser, setFoundUser] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFoundUser(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="flex flex-col h-full overflow-hidden">
            <header className="sticky top-0 z-10 flex items-center bg-transparent p-4 pb-2 justify-between backdrop-blur-sm">
                <button onClick={() => onNavigate(Screen.Encounters)} className="flex size-12 shrink-0 items-center justify-start text-slate-800 dark:text-slate-200">
                    <span className="material-symbols-outlined text-2xl">search</span>
                </button>
                <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Nearby</h1>
                <div className="flex w-12 items-center justify-end">
                     <button onClick={() => onNavigate(Screen.Profile)}><img alt="User profile picture" className="h-8 w-8 rounded-full object-cover" src="https://picsum.photos/seed/user/32/32"/></button>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="relative flex flex-col items-center justify-center w-full max-w-sm h-[420px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative flex justify-center items-center">
                            <div className="absolute size-64 rounded-full bg-primary/20 animate-pulse-ring"></div>
                            <div className="absolute size-64 rounded-full bg-primary/20 animate-pulse-ring-2"></div>
                            <div className="flex size-16 items-center justify-center rounded-full bg-primary/30">
                                <span className="material-symbols-outlined text-3xl text-primary animate-pulse">bluetooth</span>
                            </div>
                        </div>
                    </div>

                    {foundUser && (
                         <div className="relative animate-slide-up" style={{ opacity: 1 }}>
                            <div className="relative flex flex-col items-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-lg p-6 w-64 shadow-lg text-center">
                                <img alt={`Photo of ${user.name}`} className="size-32 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md" src={user.img} />
                                <div className="mt-4">
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{user.name}, {user.age}</h2>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{user.distance}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 justify-center mt-4">
                                    {user.interests.map((interest, index) => (
                                        <div key={interest} className="flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-700/50 py-1.5 px-3">
                                            <span className="material-symbols-outlined text-base text-slate-600 dark:text-slate-300">{user.interestIcons[index]}</span>
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{interest}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 w-auto">
                                <button className="flex size-16 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition-colors"><span className="material-symbols-outlined text-3xl">favorite</span></button>
                                <button className="flex size-16 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"><span className="material-symbols-outlined text-3xl">chat_bubble</span></button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 z-10 p-4 pt-20 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
                <div className="w-full max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-3 px-1">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200">Others nearby</h3>
                        <button onClick={() => onNavigate(Screen.NearbyGrid)} className="flex items-center justify-center size-9 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl text-slate-500 dark:text-slate-400 shadow-md">
                            <span className="material-symbols-outlined text-xl">devices</span>
                        </button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {otherUsers.map(u => (
                             <button key={u.name} className="flex flex-col items-center gap-2 flex-shrink-0 w-24">
                                <img alt={`Profile of ${u.name}`} className="h-16 w-16 rounded-full object-cover" src={u.img}/>
                                <p className="font-bold text-sm text-slate-800 dark:text-slate-200 truncate w-full text-center">{u.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NearbySearchScreen;
