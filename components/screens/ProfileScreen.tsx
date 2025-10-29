
import React, { useState } from 'react';

const interests = [
    { name: 'Photographie', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs_BgpQXuBG0DndhifI6hFQ6dcrIdRxcXEpJZApovdoHFTN4TB1nSvfajSuTztNGy1AUiHB-wWCryelsTlXztpo8YqpVFUqZ8ySOMC--Fu7tVkwaFxzMr5B1C4_n5r3wHBvpgXUVYqzCN6mleJeiBuzR8KazwcoEK1FHwDYHn1KGylmj2TtBV9ZscQL9csSBklx7uRYlbW93OTUQzj4v3QxAphp4f0lXQGn7sbJecQf_9VYAZH40FFJHc9LckUKE2PWeufMowfANc' },
    { name: 'Café', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5-YxFRWxFn9UiS_5Sb826yLoyR8OdHjSyDL1Cl8FJBdeHwONOnggR-zaH4kCHcpI5Isv922S62jgXmReJu3ITblwuNjhZw2gpyVbSrAqBlhF6bqFt3Z4-jcwdYkwSqnY9v8fkHxW9le9b-DUYTTfsTSHEtW2kV0axZu97E90LdHC_dDpmK5EMe7Tv_npDo85e08yaiVbsA9AnMBrF43gUk3uThOUEyv3_u91h0mw2IqEVbtmoHMc8egg7RGTnl0HUcjE4OGEhA4A' },
    { name: 'Voyages', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvYmDFJYTi0gR0zvIK1nlmGEcO7dJzAtlXiZwL8AVqb01WQ2ANg0c1_LI6Q9T6w9tLGkbEJwc_7c2BwUtZoq6GJRvyPRXY_Y93XLHKrPeKzzgTkpBYWvxop3ZarEYD-prHW2p4xrs8P7m9cJo8oD8DYhPP_MhHK2BS92GjH6lU6bxJaolzukh3GpNqDxK4mDiGpXoKnlKyvRDNX1NCW6Xxf-Ok41kFHZbzkMwSWWa6IgK_YBRhqcQ0b1gOJzDdzK3aXv3xvYIgoRo' },
    { name: 'Musique', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmDtk_O0u3vs7ioPyHGVHAbDySQfaefovXoG4kqM1U6RqkyeqYuee8FIlZ7jaPuqYHEaarxqvP-7u7Fq1EcEPttNesQ-HZxdE4JIsslmqvUsNsnbu5qg61kF8vpDebhzB1fnbkYDFScWlN66QeCVpCQiz83mwazLhwZb3fwZDdq44LDW3K6tAsxiIa5CxgLXj-vDtJVo5UlnNyhWO5Ugfi4mEPXKNj-smfumhG5mT9Yc9FML32gvWNaqQ_ME7vQExRKuq3jZW01ts' },
];

const ProfileHeader: React.FC<{onEditToggle: () => void, isEditing: boolean}> = ({onEditToggle, isEditing}) => (
     <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10">
        <div className="flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark" style={{ fontSize: '28px' }}>arrow_back_ios_new</span>
        </div>
        <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{isEditing ? 'Éditer le profil' : 'Mon Profil'}</h1>
        <div className="flex w-12 items-center justify-end">
            <button onClick={onEditToggle} className="text-primary-alt text-base font-bold leading-normal tracking-[0.015em] shrink-0">
                {isEditing ? 'OK' : 'Modifier'}
            </button>
        </div>
    </div>
)

const ProfileScreen: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="text-[#212529] dark:text-[#F8F9FA]">
            <ProfileHeader onEditToggle={() => setIsEditing(!isEditing)} isEditing={isEditing} />
            <div className="flex p-4 @container mt-4">
                <div className="flex w-full flex-col gap-4 items-center">
                    <div className="relative flex gap-4 flex-col items-center">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-surface-light dark:border-surface-dark shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq6BEyndjNj-9f7vikchfoPIWP1ZGG9eJwae-ayHidQyCfED21Y8yoYHn8b7V5_5ejNg8Hkl2yoY_bbe09ankmaWxhEWcKg6JOs2qRJZRwU2cofHT5l43-_lyfxSs9ohIL84HFGpKzEgv_IxnSQATwZkF_9h-00QzExHvo0DnHtcV682fB0S1oj7uw2QH4FIQx7ri6WYk4OwI_F9-qDYH9aFEZfFLFf0HUkBw4zGCCy2amg1EaEDuFiQMEk9p07a5LL9WgNUdBfok")' }}></div>
                        <button className="absolute bottom-0 right-0 flex items-center justify-center size-9 bg-primary-alt text-white rounded-full border-4 border-surface-light dark:border-surface-dark shadow">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-2xl font-bold leading-tight tracking-[-0.015em]">Alex Dubois</p>
                        <p className="text-base font-normal leading-normal text-text-muted-light dark:text-text-muted-dark mt-1 max-w-sm">Explorateur urbain. Passionné de photographie et de café. Toujours à la recherche du prochain spot secret.</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="h-px bg-border-light dark:bg-border-dark"></div>
            </div>

            {isEditing ? <EditInterests /> : <ViewInterests />}
            
            {!isEditing && <AboutSection />}
            
            <div className="sticky bottom-20 md:bottom-4 p-4 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
                 <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-4 bg-primary-alt text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-alt/30">
                    <span>{isEditing ? 'Sauvegarder les changements' : 'Enregistrer les modifications'}</span>
                </button>
            </div>
        </div>
    );
};

const ViewInterests: React.FC = () => (
    <>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Mes Intérêts</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 p-4">
            {interests.map(interest => (
                <div key={interest.name} className="flex flex-col items-center justify-center gap-2 p-3 bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm">
                    <img alt={`${interest.name} sticker`} className="w-12 h-12" src={interest.icon} />
                    <span className="text-sm font-medium">{interest.name}</span>
                </div>
            ))}
            <div className="flex flex-col items-center justify-center gap-2 p-3 bg-primary-alt/10 border border-dashed border-primary-alt/50 rounded-lg text-primary-alt">
                <span className="material-symbols-outlined">add_circle</span>
                <span className="text-sm font-medium text-center">Ajouter</span>
            </div>
        </div>
    </>
);

const EditInterests: React.FC = () => (
    <div className="p-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Mes Stickers</h2>
            <button className="flex items-center justify-center size-8 bg-primary-alt/10 rounded-full text-primary-alt">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
            </button>
        </div>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">Ajoute tes centres d'intérêt pour te connecter avec des personnes qui te ressemblent. C'est le meilleur moyen de briser la glace !</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4">
            {interests.map(interest => (
                 <div key={interest.name} className="relative flex flex-col items-center justify-center gap-2">
                    <img alt={`${interest.name} sticker`} className="w-16 h-16" src={interest.icon}/>
                    <span className="text-sm font-medium">{interest.name}</span>
                    <button className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-red-500 text-white shadow-md">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>close</span>
                    </button>
                </div>
            ))}
            <div className="relative flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center w-16 h-16 bg-surface-light dark:bg-surface-dark rounded-full border border-dashed border-primary-alt/50 text-primary-alt">
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>add</span>
                </div>
                <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Ajouter</span>
            </div>
        </div>
    </div>
);

const AboutSection: React.FC = () => (
    <>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">À propos de moi</h2>
        <div className="flex flex-col gap-4 p-4">
            {[{label: 'Âge', value: '28 ans'}, {label: 'Genre', value: 'Homme'}, {label: 'Emplacement', value: 'Paris, France'}].map(item => (
                <div key={item.label} className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">{item.label}</label>
                    <input className="w-full h-12 px-4 bg-surface-light dark:bg-surface-dark rounded border border-border-light dark:border-border-dark" readOnly type="text" value={item.value}/>
                </div>
            ))}
        </div>
    </>
);


export default ProfileScreen;
