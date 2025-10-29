
import React, { useState } from 'react';

const users = [
    { name: 'Sophie', age: 24, distance: '2m away', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1zIDTkfHoR3ouwoMW8NFnVdyz5fi27o_V0bPCOI75mN56feyufuS3jsWgTcWaxvfjLCtM9lfoiai8Kr7JF1if33cHPeW-z76QTIGQuwGe00n9JhC865M9NKih4kQynBJqbQzV7XDkH49rqai61KbV58-86CQIdM6CYaJo6tPnWql8hIJERluMwq8RUZtFdso_SjeT6gVNjKIXScb6jBtSdKK2a7kEymKZVffPv6k_LA1QSnzLtBB24y-hwUDa2FF0CeJUSO-R1SQ', interests: ['music_note', 'brush', 'ramen_dining'], type: 'bluetooth' },
    { name: 'Liam', age: 28, distance: '~50m away', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtrpo48gVU5rgVgG5gscafcor-NDoyoD634_KdyIEesejep1JdCEvrkO1NtRbZ6xkUaVLlVssxeKrz5DJL5DHShoGeCJQp2gcecVDlC1wmxNtGzbTPWSKPrV6BsWGWxsTCoqpSCn10QLuTJ5ogVyWbF8WuZWvDK9Lxaw2__64IstO328QmOwUmSy-eLLylq0VaXvzpohaVYJpXq3FroqA54cwBzR4ixqF23qZI_15vtz4WXALmw_7kSzZZeIgvKH2Jqf1XXlRG5vs', interests: ['sports_esports', 'code', 'movie'], type: 'location_on' },
    { name: 'Chloe', age: 22, distance: '5m away', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANfEGvwsR_NzGSRg21mGgaYACq6VBD7NRsL90dGUmF7aTqR21OmepCxoa2J579SiWqamaiO4_GBWthc3WlR0kili-vQewkzh6R63ex1BI8cbM-UG2PzJDGIzCfPssB6eIIA2osJl7Fx88zF6bK7vSiyk8rdEfJecxVYJMEnkbyytivjG5zQ-U8PJYaFvG3nKaY8QX1TwNbabBKPdgQHD2pCyQ1FZkLXmUMDKMJ_MWLjQqD0lhkbr18pJ1RHNlS_RSlhD2dV_mBM14', interests: ['hiking', 'photo_camera'], type: 'bluetooth' },
    { name: 'Marco', age: 26, distance: '8m away', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCelTJGPs0DvvzKgF_aMUy_iEnPgzELBYWzSoZIPHbQ2jilC39X63CoczTZxCZxWwscCzbAQKvC9ptt4kUNqRuL7k3nP7DJzjPEKCCzW-UTZ9Sr5pBXnfbVVtVuP46KTBLvKLcN284EfC2ZIktwG6f72tnHCyklIYzN6RO6bbUMRLj9v6fOlEifUGNXw5ZLXQpG45wsP9b9Hw5YFaCl0IsJQ888GXtAgnfeHyuNhV8S-ortlEfc9DpScmps51tN18W6B8rNJCfAPVY', interests: ['local_cafe', 'menu_book', 'flight'], type: 'bluetooth' },
];

const devices = [
    { name: 'AirPods Pro', icon: 'headphones' },
    { name: 'JBL Charge 5', icon: 'speaker' },
    { name: 'Galaxy Watch', icon: 'watch' },
];

const Chip: React.FC<{label: string, active: boolean, onClick: () => void}> = ({label, active, onClick}) => (
    <div onClick={onClick} className={`flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-4 ${active ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'}`}>
        <p className="text-sm font-medium leading-normal">{label}</p>
    </div>
)

const NearbyGridScreen: React.FC = () => {
    const [filter, setFilter] = useState('All');
    
    const filteredUsers = filter === 'All' || filter === 'Aka-aki Members' ? users : [];
    const filteredDevices = filter === 'All' || filter === 'Devices' ? devices : [];

    return (
        <div className="flex flex-col h-full">
            <header className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 justify-between backdrop-blur-sm">
                <button className="flex size-12 shrink-0 items-center justify-start text-slate-800 dark:text-slate-200"><span className="material-symbols-outlined text-2xl">search</span></button>
                <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Nearby</h1>
                <div className="flex w-12 items-center justify-end">
                    <button><img alt="User profile picture" className="h-8 w-8 rounded-full object-cover" src="https://picsum.photos/seed/user/32/32"/></button>
                </div>
            </header>
            
            <div className="flex gap-3 px-4 py-2 overflow-x-auto whitespace-nowrap">
                <Chip label="All" active={filter === 'All'} onClick={() => setFilter('All')} />
                <Chip label="Aka-aki Members" active={filter === 'Aka-aki Members'} onClick={() => setFilter('Aka-aki Members')} />
                <Chip label="Devices" active={filter === 'Devices'} onClick={() => setFilter('Devices')} />
            </div>

            <main className="flex-1 overflow-y-auto">
                {filteredUsers.length > 0 && (
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        {users.map((user, index) => (
                            <div key={index} className="relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-3 aspect-[3/4] overflow-hidden" style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%), url("${user.img}")`}}>
                                <div className="absolute top-2 right-2 flex items-center justify-center size-7 rounded-full bg-black/30 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-base text-white">{user.type}</span>
                                </div>
                                <div className="z-10">
                                    <p className="text-white text-base font-bold leading-tight">{user.name}, {user.age}</p>
                                    <p className="text-slate-200 text-xs font-medium">{user.distance}</p>
                                    <div className="flex gap-1.5 mt-2">
                                        {user.interests.map((icon, i) => (
                                             <div key={i} className="flex items-center justify-center size-6 rounded-full bg-white/20 backdrop-blur-sm"><span className="material-symbols-outlined text-sm text-white">{icon}</span></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {filteredDevices.length > 0 && (
                    <>
                    <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Other Devices Detected</h3>
                    <div className="flex flex-col gap-2 px-4 pb-4">
                        {devices.map((device, index) => (
                            <div key={index} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg min-h-14 justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 shrink-0 size-10"><span className="material-symbols-outlined">{device.icon}</span></div>
                                    <p className="text-slate-900 dark:text-slate-100 text-base font-medium leading-normal flex-1 truncate">{device.name}</p>
                                </div>
                                <div className="shrink-0"><p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Device detected</p></div>
                            </div>
                        ))}
                    </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default NearbyGridScreen;
