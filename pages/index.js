import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
    ArrowCircleDownIcon, ArrowCircleUpIcon, PlayIcon, PauseIcon,
} from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const Anime = dynamic(() => import('react-anime'), { ssr: false });

export default function Home() {
    const refer = React.createRef();
    const [isPlaying, setIsPlaying] = useState(true);
    const [seconds, setSeconds] = useState(0.7);

    // useEffect(() => {
    //     if (refer) {
    //         if (isPlaying) {
    //             refer.current.anime.play();
    //         } else {
    //             refer.current.anime.pause();
    //         }
    //     }
    // }, [isPlaying]);

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
                    <Anime
                        easing="cubicBezier(0.990, 0.010, 0.020, 1.000)"
                        loop={isPlaying}
                        ref={refer}
                        duration={seconds * 1000}
                        direction="alternate"
                        translateX={['1%', '96%']}>
                        <div className={styles.red} />
                    </Anime>
                </div>
                <div className="absolute bottom-10 flex justify-center w-full select-none text-white">
                    <p className="text-white select-none">{seconds.toFixed(2)} seconds</p>
                    {/* Preview mode.... */}
                </div>
                <div className="absolute right-10 bottom-10 select-none">
                    <ArrowCircleUpIcon
                        className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                        opacity={seconds === 1 ? '0.0' : '1.0'}
                        onClick={() => setSeconds(seconds + 0.1)} color="white"/>
                    {/* {
                        !isPlaying && <PlayIcon
                            className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                            onClick={() => {
                                refer.current.anime.play();
                                setIsPlaying(false);
                            }}
                            color="white"/>
                    }
                    {
                        isPlaying && <PauseIcon
                            className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                            onClick={() => {
                                refer.current.anime.pause();
                                setIsPlaying(false);
                            }}
                            color="white"/>
                    } */}
                    <ArrowCircleDownIcon
                        className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none"
                        opacity={seconds === 10 ? '0.0' : '1.0' }
                        onClick={() => setSeconds(seconds - 0.1)} color="white"/>
                </div>
            </div>
        </>

    );
}
