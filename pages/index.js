import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
    ArrowCircleDownIcon,
    ArrowCircleUpIcon,
    PlayIcon,
    PauseIcon,
} from '@heroicons/react/outline';
import anime from 'animejs';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [bufferSeconds, setBufferSeconds] = useState(1.0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [seconds, setSeconds] = useState(1.0);
    const animation = React.createRef();

    useEffect(() => {
        animation.current = anime({
            targets: '#red',
            easing: 'cubicBezier(0.990, 0.010, 0.020, 1.000)',
            loop: true,
            duration: seconds * 1000,
            direction: 'alternate',
            translateX: [30, window.outerWidth - 70],
        });
    }, [animation, seconds]);

    return (
        <>
            <Head>
                <title>EMDR Virtual Lightbar</title>
                <meta name="description" content="Self Administered EMDR Therapy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-screen h-screen bg-slate-500 relative overflow-hidden">
                <div className="relative select-none"><h1 className="text-white mt-5 ml-5 text-3xl">EMDR Virtual Lightbar</h1></div>
                <div className={styles.animationWrapper}>
                    <div id="red" className={styles.red}></div>
                </div>
                <div className="absolute bottom-10 flex justify-center w-full select-none text-white">
                    <p className="text-white select-none">{seconds.toFixed(2)} seconds</p>
                    {/* Preview mode.... */}
                </div>
                <div className="absolute right-10 bottom-10 select-none">
                    <ArrowCircleUpIcon
                        className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                        // opacity={seconds === 1 ? '0.0' : '1.0'}
                        onClick={() => setSeconds(seconds - 0.05)} color="white"/>
                    {
                        !isPlaying && <PlayIcon
                            className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                            onClick={() => {
                                // animation.current.play();
                                setIsPlaying(true);
                                setSeconds(bufferSeconds);
                            }}
                            color="white"/>
                    }
                    {
                        isPlaying && <PauseIcon
                            className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                            onClick={() => {
                                // animation.current.pause();
                                setIsPlaying(false);
                                setBufferSeconds(seconds);
                                setSeconds(0);
                            }}
                            color="white"/>
                    }
                    <ArrowCircleDownIcon
                        className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                        // opacity={seconds === 10 ? '0.0' : '1.0' }
                        onClick={() => setSeconds(seconds + 0.05)} color="white"/>
                </div>
            </div>
        </>

    );
}
