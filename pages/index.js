import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from '@heroicons/react/outline'
import { FireIcon } from '@heroicons/react/solid'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [seconds, setSeconds] = useState(3.0);
	const displaySpeed = 10.0 - seconds.toFixed(1);
	return (
		<div className="w-screen h-screen bg-slate-500 relative overflow-hidden">
			<Head>
				<title>EMDR Virtual Lightbar</title>
				<meta name="description" content="Self Administered EMDR Therapy" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <div className="relative select-none"><h1 className="text-white mt-5 ml-5 text-3xl">EMDR Virtual Lightbar</h1></div> */}
			{/* <div className={styles.pot} style={{'-webkit-animation-duration': `${seconds}s`}}> */}
				{/* <Image src="https://i.stack.imgur.com/qgNyF.png?s=328&g=1" width="100px" height="100px" alt="indicator" /> */}
				{/* <FireIcon className="h-20 w-20" color="white"/> */}
			{/* </div> */}
			<div className="absolute bottom-10 flex justify-center w-full select-none text-white">
				{/* <p className="text-white select-none">{displaySpeed.toFixed(1)}</p> */}
				Preview mode....
			</div>
			<div className="absolute right-10 bottom-10 select-none">
				<ArrowCircleUpIcon 
					className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none" 
					opacity={seconds === 1 ? "0.0":"1.0"} 
					onClick={()=>setSeconds(seconds - 0.5)} color="white"/>
				<ArrowCircleDownIcon 
					className="h-10 w-10 hover:cursor-pointer hover:opacity-75 m-2 select-none" 
					opacity={seconds === 10 ? "0.0":"1.0" } 
					onClick={()=>setSeconds(seconds + 0.5)} color="white"/>
			</div>
		</div>
	)
}
