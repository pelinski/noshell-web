import React from 'react'
import { Link } from 'react-router-dom'
import { AudioPlayer } from '../components/AudioPlayer'

export const Tldr: React.FC = (): JSX.Element => (
	<div id='tldr'>
		<h3>
			++++-----
			<br />
			<b>tldr;</b>
			mladen dolar 2010: with the voice one always impersonates oneself. <br />
			who is it that is being impersonated when the voice is being artificially generated?
			<br />
			--------+++
		</h3>
		<div className='audio'>
			<AudioPlayer audioSrc={'audio/with-the-voice.wav'} />
		</div>
		<nav>
			<Link to={'/'}> +++go home </Link>
		</nav>
	</div>
)
