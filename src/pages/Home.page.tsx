import React, { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import HtmlParser from 'react-html-parser'

import { Title } from '../components/Title'
import { ScrollButton, ScrollBasicButton } from '../components/Buttons'
import { HomeNav } from '../components/Nav'

const IntroHtmlText = `<p>+</p> <p>hi i'm teresa pelinski and i trained a wavenet using a couple of hours of my dad's field recordings. my dad was an ethnomusicologist and he studied the sword dance at todolella, a very small village close to castellón, in eastern spain. in these tapes, he interviewed the old and the young who inhabit todolella and asks them about how their lives have changed and how cultural identity is represented through music. these tapes were recorded during the 90s. the video corresponds to mounted mini dv tape videos i recorded in september 2020 in an abandoned megaconstruction in north-central spain (ciudad del medioambiente, soria).</p> <p>i found these tapes in a wooden mountain of boxes in his office. my dad does not live anymore, so i guess they do technically belong to me. there are a lot of tapes in his office. are they going to be ever listened again? or will someone just throw them in the bin when i die? this project is about many things, but mainly about listening. in the tapes, there is a voice asking questions: my dad's. this is a voice i had long not heard, a voice i dreamed about but did not dare to press play to hear for many years. i listened to his questions for hours in the process of digitalising the tapes.</p> <p> this project is also about listening to the body who emits this artificial voice. is there such a body? dolar, chion and schaeffer talk about the object in the voice and i collect some of their ideas in the essay you can read <a href="/read">here</a>. this project is still under development as an artistic residency at phonos foundation in barcelona.</p> <p>+</p>`

export const HomePage: React.FC = (): JSX.Element => {
	return (
		<>
			<div
				className='screen'
				id='title-box'
				tabIndex={0}
				onKeyDown={(e) => arrowsHandler({ e, next: 'listen' })}
			>
				<Title titleStyle={'3d'} />
				<ScrollButton scrollTo={'listen'} />
			</div>
			<div
				className='screen'
				id='listen'
				tabIndex={1}
				onKeyDown={(e) => arrowsHandler({ e, prev: 'title-box', next: 'intro' })}
			>
				<ScrollBasicButton scrollTo={'title-box'} flip={true} />
				<AudioPlayer audioSrc={'audio/just_a_voice_8.wav'} />
				<ScrollBasicButton scrollTo={'intro'} />
			</div>
			<Intro />
		</>
	)
}
const AudioPlayer: React.FC<{ audioSrc: string }> = ({ audioSrc }): JSX.Element => {
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
		}, [1000])
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

const Intro: React.FC = (): JSX.Element => {
	const self = useRef<HTMLDivElement | null>(null)
	const [expandIntro, setExpandIntro] = useState<boolean>(false)
	const [isOnScreen, setIsOnScreen] = useState<boolean>(false)

	useEffect(() => {
		const onScroll = (): void => {
			const dim = self.current?.getBoundingClientRect()
			if (
				dim &&
				(dim.top > window.innerHeight ||
					dim.bottom < 0 ||
					dim.left > window.innerWidth ||
					dim.right < 0)
			) {
				// if is outside of screen
				setIsOnScreen(false)
				setExpandIntro(false)
			} // if its on screen
			else setIsOnScreen(true)
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div
			className='screen'
			id='intro'
			ref={self}
			onClick={() => setExpandIntro(true)}
			tabIndex={2}
			onKeyDown={(e) => arrowsHandler({ e, prev: 'listen' })}
		>
			<ScrollBasicButton scrollTo={'listen'} flip={true} />
			<div className='content-wrapper'>
				{expandIntro
					? HtmlParser(`<div class="Typewriter"> ${IntroHtmlText}</div>`) // trigger all text if expandIntro
					: isOnScreen && (
							<Typewriter // only load typewriter if on screen (otherwise it starts even if outside of screen)
								options={{
									strings: [IntroHtmlText],
									autoStart: true,
									cursor: '',
									delay: 50,
									loop: true,
									deleteSpeed: 0,
									wrapperClassName: 'Typewriter',
								}}
							/>
					  )}
				<HomeNav {...{ expandIntro }} />
			</div>
		</div>
	)
}

const arrowsHandler = ({
	e,
	prev,
	next,
}: {
	e: React.KeyboardEvent<HTMLDivElement>
	prev?: string
	next?: string
}): void => {
	if (prev && e.key == 'ArrowUp')
		document.getElementById(prev)?.scrollIntoView({ behavior: 'smooth' })
	if (next && e.key == 'ArrowDown')
		document.getElementById(next)?.scrollIntoView({ behavior: 'smooth' })
}
