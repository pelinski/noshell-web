import React, { useState, useRef, useEffect } from 'react'

export const AudioPlayer: React.FC<{ audioSrc: string }> = ({ audioSrc }): JSX.Element => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false)

	//refs
	const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc))
	const [trackProgress, setTrackProgress] = useState<number>(0)
	const intervalRef = useRef<any>(null)

	const { duration } = audioRef.current

	const startTimer = (): void => {
		// Clear any timers already running
		clearInterval(intervalRef.current)

		intervalRef.current = setInterval((): void => {
			if (audioRef.current.ended) {
				console.log(audioRef.current.currentTime)
			} else {
				setTrackProgress(audioRef.current.currentTime)
			}
		}, 1000)
	}

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play()
			startTimer()
		} else {
			clearInterval(intervalRef.current)
			audioRef.current.pause()
		}
	}, [isPlaying])

	useEffect(() => {
		// Pause and clean up on unmount
		return (): void => {
			audioRef.current.pause()
			clearInterval(intervalRef.current)
		}
	}, [])

	const onScrub = (value: string | number): void => {
		// Clear any timers already running
		clearInterval(intervalRef.current)
		audioRef.current.currentTime = Number(value)
		setTrackProgress(audioRef.current.currentTime)
	}

	const onScrubEnd = (): void => {
		// If not already playing, start
		if (!isPlaying) {
			setIsPlaying(true)
		}
		startTimer()
	}
	return (
		<div className='audio-player'>
			<div className='audio-controls'>
				{isPlaying ? (
					<button
						type='button'
						className='pause'
						onClick={() => setIsPlaying(false)}
						aria-label='Pause'
					>
						<img src={require('url:~public/icons/pause.svg')} alt='pause button' />
					</button>
				) : (
					<button
						type='button'
						className='play'
						onClick={() => setIsPlaying(true)}
						aria-label='Play'
					>
						<img src={require('url:~public/icons/play.svg')} alt='play button' />
					</button>
				)}
			</div>
			<input
				type='range'
				value={trackProgress}
				step='1'
				min='0'
				max={duration ? duration : `${duration}`}
				className='progress'
				onChange={(e) => onScrub(e.target.value)}
				onMouseUp={onScrubEnd}
				onKeyUp={onScrubEnd}
			/>
		</div>
	)
}
