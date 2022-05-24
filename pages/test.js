import React from 'react';
// import Anime from 'react-anime';

import dynamic from 'next/dynamic';
// import styles from '../styles/Home.module.css';

const Anime = dynamic(() => import('react-anime'), { ssr: false });

export default function App() {
    const refer = React.createRef(); // created a reference which is used to identify a rendered component
    return (
        <div className="text-center">
            <Anime
                autoplay={false}
                opacity={[0, 1]}
                translateX={['100vw', 0]}
                ref={refer} // giving reference to the component
                duration={5000}
            >
        Hello
            </Anime>
            <button
                onClick={() => {
                    refer.current.anime.play(); // triggering play() function
                }}
            >
        Play
            </button>
            <button
                onClick={() => {
                    refer.current.anime.pause(); // triggering pause() function
                }}
            >
        Pause
            </button>
            <button
                onClick={() => {
                    refer.current.anime.restart(); // triggering restart() function
                }}
            >
        Restart
            </button>
        </div>
    );
}
