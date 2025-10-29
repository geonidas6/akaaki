
import React, { useEffect } from 'react';
import { Screen } from '../../types';

interface EncountersScreenProps {
    onNavigate: (screen: Screen) => void;
}

const encounters = [
    { name: 'Marie', age: 28, time: 'Croisé(e) il y a 2h', location: 'Près de Rue de Rivoli', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsdjm8p-93JXmYgQ7aNwFocaDjZNs2aHV05678YN2lCeK7-122vFhNwxjy5v3nhCwoLm9UmLlRPATbZwQR8VIXfitSJ5mfSuHEWGeoExar-3qMl-0USajnKUjvI5TX7OaeH3BddlI4tCEjA3b3SxYfV1oUowQfBEB6mXsLZNc5UiBZtWKU9ljM5ImtsJOaxzyTSZVkUlKkpWDalzgBO2UV7U1J20SICfO79lkXMVYuVS8voJOOrG88PZIVCbbUbQwB9m1vqO2rcdM', action: 'like' },
    { name: 'Julien', age: 31, time: 'Aujourd\'hui à 14:30', location: 'Près de Parc Monceau', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVHTmZZPd2FKmtjlo_tLNQUBGqIqC_E7GlGCG3XMald6ctz1mXHPW2KDDKWgCEI3_XL1KxHSbYYGwZJjAss8Idn4AFje4BFawwruT9lCVV9sLKYpBCieOgHJI_hxcKxSHtAJTiBqc1_dX3zYg0dmiFcVhU9QU_AorLQExy6vqX3p7FN86E17zL7OsdgsRiGo_Ljf2jXdIlU0pRRZHD6bdAPaGk_bFQAauxnyJHlmkc8DKUq9je0nhvsofpwYWRQz0t6be3_xCGJAA', action: 'wave' },
    { name: 'Chloé', age: 26, time: 'Hier à 19:00', location: 'Près de Opéra Garnier', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4fTJKdEb6ToTQCWuvVSd2bJ8_FRJmxopVVauvBDAdmejpSKshbpla4hHn5gUfiNSwfVHSC4rVnHzE3xc0LPOodwDFV0QsAuivhp0nhGGvu6jW-cAxvzejbnxlzIfo22JtffZjFVAuQ1HCvkFXRNgyzdMV3eD7CMwc9ce2rj_ehgA0iOCy_Q8xrbeZKJIFYdCRj1JaY5cqn11eYbItsCCA-OuZdW5A5FkTXmKROZwZX4LUBXJFVuv3ev39qYflftAC6tAcRUg-Caw', action: 'wave' },
    { name: 'Lucas', age: 29, time: 'Hier à 11:15', location: 'Près de Jardin du Luxembourg', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGxzvr-yGF3IDvLuleezAy1dc9Jv-0N-Ytsjz7L5vSEJ_t9_nKhJj7fOccYbL4B4Cx9HH-Uh0dThCajmeqdEffw6jmOw6V41Q_SHqlOfxjXrEx9wMqTKWn5ozM7vFhr80ecv1QZZHv6JIUx_RjSDH4mhjjtqGr9pnx_KwzhFlUMO3zP2xSyVXCmwdFN-JU4boMaAp3A8n9MaLpVR7v4xsERaFfxtZh1oltPApqVZeBobbQfTlXLRZ1Gf8Pv1Hxyafh_sLA4yvAF0o', action: 'like' },
];

const EncountersScreen: React.FC<EncountersScreenProps> = ({ onNavigate }) => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => { console.log("Geolocation:", position.coords); },
            (error) => { console.error("Geolocation error:", error); }
        );
    }, []);

    return (
        <div className="flex flex-col h-full">
             <header className="sticky top-0 z-10 flex h-16 items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 justify-between border-b border-slate-200 dark:border-slate-800">
                <button onClick={() => onNavigate(Screen.NearbyGrid)} className="flex size-12 shrink-0 items-center justify-start text-primary">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
                <h1 className="text-lg font-bold text-text-light dark:text-text-dark tracking-tight flex-1 text-center">Personnes croisées</h1>
                <div className="flex w-12 items-center justify-end">
                    <button onClick={() => onNavigate(Screen.NearbySearch)} className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-primary dark:text-primary">
                        <span className="material-symbols-outlined text-2xl">radar</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 px-4 pt-4">
                <div className="flex flex-col gap-4">
                    {encounters.map((p, index) => (
                        <div key={index} className="flex items-stretch justify-between gap-4 rounded bg-card-light dark:bg-card-dark p-4 shadow-sm">
                            <div className="flex flex-[2_2_0px] flex-col justify-between">
                                <div>
                                    <p className="text-sm font-normal text-text-muted-light dark:text-text-muted-dark">{p.time}</p>
                                    <p className="text-base font-bold text-text-light dark:text-text-dark">{p.name}, {p.age}</p>
                                    <p className="text-sm font-normal text-text-muted-light dark:text-text-muted-dark">{p.location}</p>
                                </div>
                                {p.action === 'like' ? (
                                     <button className="flex w-fit min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-9 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors">
                                        <span className="material-symbols-outlined text-base">favorite</span>
                                        <span>Like</span>
                                    </button>
                                ) : (
                                    <button className="flex w-fit min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-9 px-4 bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary text-sm font-medium leading-normal hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                                        <span className="material-symbols-outlined text-base">waving_hand</span>
                                        <span>Dire bonjour</span>
                                    </button>
                                )}
                            </div>
                            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded flex-1" style={{ backgroundImage: `url("${p.img}")` }}></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default EncountersScreen;
