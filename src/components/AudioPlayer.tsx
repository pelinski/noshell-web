import React, { useState, useRef, useEffect } from 'react'

export const AudioPlayer: React.FC<{ audioSrc: string }> = ({ audioSrc }): JSX.Element => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false)

	//refs
	const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc))
	const sliderRef = useRef<HTMLDivElement | null>(null)
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
	const thumbPosition = (): number => {
		const thumbWidth = 7
		const sliderWidth = sliderRef.current ? sliderRef.current.getBoundingClientRect().width : 0
		const thumbPosition = (sliderWidth * trackProgress) / duration
		if (trackProgress > duration - thumbWidth) return thumbPosition - thumbWidth - 3
		// so that thumb does not get out of slider
		else return thumbPosition
	}
	return (
		<div className='audio-player'>
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
			<div>---&nbsp;</div>
			<div className='slider' ref={sliderRef}>
				<div
					style={{
						left: thumbPosition(),
					}}
				/>
				<input
					type='range'
					value={trackProgress}
					step='1'
					min='0'
					max={duration + 3.5}
					onChange={(e) => onScrub(e.target.value)}
					onMouseUp={onScrubEnd}
					onKeyUp={onScrubEnd}
				/>
			</div>
			<div>&nbsp;---+</div>
		</div>
	)
}
