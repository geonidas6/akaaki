
import React, { useState } from 'react';

const conversations = [
    { name: 'Lucas', msg: 'Hey! Are you at the festival?', time: '10:42 AM', unread: 2, online: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVoPKotjzoQTiX0Ty3vIvCI2fYAuAOCVOpgCEf9rpyvKHBTFhxPWzQEZXE7HhLWK11qLfX2YKykATLTSHcW2JNBF4hR1L-Q63eSTTrd52eXnRbx9BA8G6gubcp3BBNLpnX4dpHuOcZ-RJw9sH9BJl2bXO2ZQ6TNZVYCJYMyiHpJ7PsQ7t2TGSrx6yoUun0J5GvjjAeRUcDAamiDbY5hXuBTwE-7Kywar6XxIZfgPOrPRRZOAZWLNRJFUXXgFdy3cFCkUme6IMG91A', status: 'unread' },
    { name: 'Mia', msg: 'Just saw your profile, cool photos!', time: 'Yesterday', unread: 0, online: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPvae_mOdA7_mIvSCgM_8v3OVJ1OEzX9ShAK_EjGQiSeYDsPki1f7xg4CEy-iF6ax2LKL3Md5WPCD7ow5hm_WLuQFlHtef7IS6u4CxMf9sJzKqPLDIdwnSUTEj7J168T8sKFzfGs1LDCTkgatdG8i30e2j-ryCMNJByqnRKRY-pa-MXyuEIdrUkFChdicvtj7DiFmdHVZ0Y-yqHYmfc3hc8aBNCwBBqCTxpoCtFwUcGWsSRkP_lQPeRXaqDHqY_WPniTs2jdhoHwc', status: 'read' },
    { name: 'Noah', msg: "What's up?", time: '3/15/24', unread: 0, online: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVoF0Z5vJ0obQzdZNz4sWzwAxKqsZrK5fDucFO_bqt3C0XYyqJ3gEle7op5FXjAlTxrF3noc4tzOz66WCPLukiQxbhvZQnMOgs1rnTkl02TS7JnyQQtBjBxNZU8PwaBNFEp42OGsDD7NPT3QunPW9Jl0w_BxzjcZ4Z3TW8ahaMtyt-cLLOFJ8Q2mt-oWDfah3eY-O0BdrH0_tbsjaLaIxpMwZtSuqOTyEIW4C6PbS76PwdHeIolMVubXHIZ0lChJP6KhpdRGB6qO4', status: 'read' },
    { name: 'Chloe', msg: 'Typing...', time: '10:30 AM', unread: 1, online: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrN4AUAV-naxyGQOFsPty01fBwVLGURZwPPtaeHHyWI1WBElz-GlS2mD0UT-65YAmKCXDXNKq7gS0IK5Jwq40qdDwOFvGuxVszYIqoXR3IBJkwHIS-T_dT72PE4Y4WdTyr1Wuox-fxrTp2DCgZUBeUp4qx9XoZs8AVtYtsGGBE9HyGP-UY6k76hXLKaR0a1j3EXPxNPj3P7zHqQ5JLmX3WfUGjTQUuK3jGbbduM2-m5P2RE1HCbQupRR2TH0SJHONBlZmbM7BZlDY', status: 'typing' },
    { name: 'Ethan', msg: 'Sounds good, see you there.', time: '9:15 AM', unread: 0, online: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxG1HWPZXwpFIxRFUxFpOUm27xqLZmMxZeMIuPlDY3nJmBN373e9-xYLp5JRgN3ozx0ZeE20k2g1iGY3tMmNYZ6O9A9HPGPkieAxj5CyC_y8fWrHu7xezvA4vd3cJnGS5F7-s3eGuWaSjeXqi_BCa0AibqW_66XsS43q9Yf3VtTNUnBgp8V1UqM1Pb5DvFK1x6BSoGLRIQTHeR1BBYVXP-2gF1x1aHg8g8lFfbwaDnZLBR7B-8u177Gy1iAtwd-MPglPrgOOm20X8', status: 'sent' },
];

const MessagesScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Nearby');
    
    return (
        <div className="flex flex-col h-full">
            <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="flex items-center p-4 pb-2 justify-between">
                    <div className="flex size-12 shrink-0 items-center justify-start">
                        <button className="flex items-center justify-center h-12 w-12 text-zinc-900 dark:text-zinc-200">
                            <span className="material-symbols-outlined text-2xl">search</span>
                        </button>
                    </div>
                    <h2 className="text-lg font-bold tracking-[-0.015em] text-zinc-900 dark:text-zinc-100 flex-1 text-center">Messages</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 w-12 text-zinc-900 dark:text-zinc-200 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                            <span className="material-symbols-outlined text-2xl">add_comment</span>
                        </button>
                    </div>
                </div>
                 <div className="flex px-4 py-3">
                    <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-zinc-200/60 dark:bg-zinc-800 p-1">
                        <button onClick={() => setActiveTab('Nearby')} className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-semibold leading-normal transition-all duration-300 ${activeTab === 'Nearby' ? 'bg-white dark:bg-zinc-900 shadow-sm text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'}`}>
                            <span className="truncate">Nearby</span>
                        </button>
                        <button onClick={() => setActiveTab('Friends')} className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-semibold leading-normal transition-all duration-300 ${activeTab === 'Friends' ? 'bg-white dark:bg-zinc-900 shadow-sm text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'}`}>
                            <span className="truncate">Friends</span>
                        </button>
                    </div>
                </div>
            </header>
            <div className="flex flex-col px-2">
                {conversations.map((convo, index) => (
                     <div key={index} className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" style={{backgroundImage: `url("${convo.img}")`}}></div>
                                {convo.online && <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-background-light dark:border-background-dark"></div>}
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-zinc-900 dark:text-zinc-100 text-base font-medium leading-normal line-clamp-1">{convo.name}</p>
                                <p className={`${convo.status === 'typing' ? 'text-primary dark:text-primary/90 font-medium' : 'text-zinc-500 dark:text-zinc-400'} text-sm font-normal leading-normal line-clamp-1`}>{convo.msg}</p>
                            </div>
                        </div>
                        <div className="shrink-0 text-right">
                             <p className="text-zinc-500 dark:text-zinc-400 text-xs font-normal leading-normal mb-1">{convo.time}</p>
                             {convo.unread > 0 ? (
                                <span className="flex items-center justify-center bg-primary text-white text-xs font-bold rounded-full h-5 w-5 ml-auto">{convo.unread}</span>
                             ) : convo.status === 'sent' ? (
                                <span className="material-symbols-outlined text-base text-primary">done_all</span>
                             ) : null }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessagesScreen;
