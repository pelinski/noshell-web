import React, { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import HtmlParser from 'react-html-parser'

import { Title } from '../components/Title'
import { HomeNav } from '../components/Nav'
import { AudioPlayer } from '../components/AudioPlayer'

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
				<ScrollArrow scrollTo={'listen'} />
			</div>
			<div
				className='screen'
				id='listen'
				tabIndex={1}
				onKeyDown={(e) => arrowsHandler({ e, prev: 'title-box', next: 'intro' })}
			>
				<ScrollArrows prevScrollTo={'title-box'} nextScrollTo={'intro'} />
				<AudioPlayer audioSrc={'audio/just_a_voice_8.wav'} />
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
				<HomeNav {...{ expandIntro }} />
			</div>
		</div>
	)
}

export const ScrollArrow: React.FC<{ scrollTo: string; flip?: boolean }> = ({
	scrollTo,
	flip = false,
}): JSX.Element => (
	<a onClick={scrollHandler(scrollTo)} className={flip ? 'button flip' : 'button'}>
		| <br />
		| <br />
		| <br />
		| <br />
		v <br />
	</a>
)

export const ScrollArrows: React.FC<{ prevScrollTo: string; nextScrollTo: string }> = ({
	prevScrollTo,
	nextScrollTo,
}): JSX.Element => (
	<div className='arrows'>
		<a onClick={scrollHandler(prevScrollTo)} className='flip'>
			| <br />
			| <br />
			| <br />
			v <br />
		</a>
		<a onClick={scrollHandler(nextScrollTo)}>
			| <br />
			| <br />
			| <br />
			v <br />
		</a>
	</div>
)

const scrollHandler = (scrollTo: string) => (): void =>
	document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })

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
