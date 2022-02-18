import React from 'react'
import { Link } from 'react-router-dom'
import { AudioPlayer } from '../components/AudioPlayer'

export const Tldr: React.FC = (): JSX.Element => (
	<div id='tldr' aria-label="Too long didn't read summary">
		<h3>
			<div aria-hidden={true}>++++-----</div>
			<br />
			<b>tldr;</b>
			mladen dolar 2010: with the voice one always impersonates oneself. <br />
			who is it that is being impersonated when the voice is being artificially generated?
			<br />
			<div aria-hidden={true}>--------+++</div>
		</h3>
		<div className='audio'>
			<AudioPlayer audioSrc={'audio/with-the-voice.wav'} />
		</div>
		<nav>
			<p>
				this project was formed in residency @{' '}
				<a href='https://www.upf.edu/web/phonos/'>phonos</a>
			</p>
			<Link to={'/read'}>
				{' '}
				<div aria-hidden={true}>+++</div>go back
			</Link>
		</nav>
	</div>
)
