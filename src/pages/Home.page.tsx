import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import HtmlParser from 'react-html-parser'

import { Title } from '../components/Title'
import { AudioPlayer } from '../components/AudioPlayer'
import { ScrollArrow, ScrollArrowSide, arrowsHandler } from '../components/Arrows'

const IntroHtmlText = `<p>+</p> 
<p>hi i'm teresa pelinski and i generated an artificial voice using a couple of hours of my dad's field recordings and wavenet, a neural synthesis model. my dad, ramón pelinski, was an ethnomusicologist and he studied the sword dance at la todolella, a very small village close to castellón, in eastern spain. in these tapes, he interviews the old and the young who inhabit la todolella and asks them about how their lives have changed thorough the ages and how cultural identity is represented through music. these tapes were recorded during the 90s.</p> <p>i found these tapes in a wooden mountain of boxes in his office. my dad does not live anymore, so i guess they do technically belong to me. there are a lot of tapes in his office. are they going to be ever listened again? or will someone just throw them away when i die? this project is about many things, but mainly about listening. in the tapes, there is a voice asking questions: my dad's. this is a voice i had long not heard. i listened to his questions for hours in the process of digitalising the tapes. </p> <p> this project is also about listening to the body that emits this artificial voice. is there such a body? dolar, chion and schaeffer talk about the object in the voice and i collect some of their ideas in the essay you can read <a href="/read">here</a>.</p>
 <p>+</p>`

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
				<ScrollArrow scrollTo={'listen'} />
			</div>
			<div
				className='screen'
				id='listen'
				tabIndex={1}
				onKeyDown={(e) => arrowsHandler({ e, prev: 'title-box', next: 'intro' })}
			>
				<ScrollArrowSide scrollTo={'intro'} side={'left'} flip={true} />
				<div className='audios'>
					<div>
						<span>1. archivo ---{'>'}</span>
						<AudioPlayer audioSrc={'audio/interview-sample.wav'} />
					</div>
					<div>
						<span>2. proceso ---{'>'}</span>
						<AudioPlayer audioSrc={'audio/process.wav'} />
					</div>
					<div>
						<span>3. voz -------{'>'}</span>
						<AudioPlayer audioSrc={'audio/just-a-voice.wav'} />
					</div>
				</div>
				<ScrollArrowSide scrollTo={'title-box'} side={'right'} />
			</div>
			<Intro />
		</>
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
			<ScrollArrow scrollTo={'listen'} flip={true} />
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
				{!expandIntro && <p>click to trigger text</p>}
				<nav className='home-nav'>
					<Link to='/read'>++read more--</Link>
				</nav>
			</div>
		</div>
	)
}
