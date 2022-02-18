import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import HtmlParser from 'react-html-parser'

import { Title } from '../components/Title'
import { AudioPlayer } from '../components/AudioPlayer'
import { ScrollArrow, ScrollArrowSide, arrowsHandler } from '../components/Arrows'

const IntroHtmlText = `<p>+</p> 
<p>hi i'm teresa pelinski and i generated an artificial voice using a couple of hours of my dad's field recordings and wavenet, a neural audio synthesis deep learning model. my dad, ramón pelinski, was an ethnomusicologist and he studied the sword dance at la todolella, a small village close to castellón, in eastern spain. in these tapes, recorded during the 90s, he interviews the old and the young who inhabit la todolella and asks them about how their lives have changed through time and how cultural identity is represented through music.</p> 
<p>i found these tapes in a wooden mountain of boxes in his office. my dad does not live anymore, and i wonder if these tapes are ever going to be listened again. will someone just throw them away when i die? in the process of digitalising the tapes, i heard todolellanos' voices and a voice i had long not heard, my dad's. </p> 

<p> this project is about many things, but mainly about listening. i feel the warmth of my dad's voice, and recognise some of the todolellanos' voices – i met some of them when i was a kid. and i wonder who am i listening to when i listen to the artificial voice. do voices always point to someone? can they point to more than one person? in  <a href="/read">this essay</a>, i discuss the question of the body in artificial voices considering mladen dolar, michel chion and pierre schaeffer's accounts on the voice.</p>
<p>+</p>`

export const HomePage: React.FC = (): JSX.Element => (
	<>
		<div
			className='screen'
			id='title-box'
			tabIndex={0}
			onKeyDown={(e) => arrowsHandler({ e, next: 'listen' })}
		>
			<Title titleStyle={'slick'} />
			<ScrollArrow scrollTo={'listen'} />
		</div>
		<div
			aria-label='Listen'
			className='screen'
			id='listen'
			tabIndex={1}
			onKeyDown={(e) => arrowsHandler({ e, prev: 'title-box', next: 'intro' })}
		>
			<ScrollArrowSide scrollTo={'intro'} side={'left'} flip={true} />
			<div className='audios'>
				<div aria-labelledby='track1'>
					<span id={'track1'}>
						1. archivo <div aria-hidden={true}>&nbsp;---{'>'}</div>
					</span>
					<AudioPlayer audioSrc={'audio/interview-sample.wav'} />
				</div>
				<div aria-labelledby='track2'>
					<span id={'track2'}>
						2. proceso <div aria-hidden={true}>&nbsp;---{'>'}</div>
					</span>
					<AudioPlayer audioSrc={'audio/process.wav'} />
				</div>
				<div aria-labellledby='track3'>
					<span id={'track3'}>
						3. voz <div aria-hidden={true}>&nbsp;-------{'>'}</div>
					</span>
					<AudioPlayer audioSrc={'audio/just-a-voice.wav'} />
				</div>
			</div>
			<ScrollArrowSide scrollTo={'title-box'} side={'right'} />
		</div>
		<Intro />
	</>
)

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
			<div className='content-wrapper' aria-label='Intro'>
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
				{!expandIntro && <p aria-hidden={true}>click to trigger text</p>}
				<nav className='home-nav' aria-role='navigation'>
					<Link to='/read' aria-label='Click to read more'>
						<div aria-hidden={true}>++read more--</div>
					</Link>
					<p>
						this project was formed in residency @{' '}
						<a href='https://www.upf.edu/web/phonos/'>phonos</a>
					</p>
				</nav>
			</div>
		</div>
	)
}
