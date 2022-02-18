import React from 'react'
import { Link } from 'react-router-dom'

export const AboutMePage: React.FC = (): JSX.Element => (
	<div id='aboutme' aria-label='About me'>
		<nav>
			<p>
				this project was formed in residency @{' '}
				<a href='https://www.upf.edu/web/phonos/'>phonos</a>
			</p>
			<Link to={'/read'}>
				{' '}
				<div aria-hidden={true}>+++</div>go back{' '}
			</Link>
		</nav>
		<p>
			i am teresa pelinski, a phd researcher in artificial intelligence and music at queen
			mary university of london. i did my undergrad in physics at universidad autónoma de
			madrid and became interested in sound, so i studied acoustics at rwth aachen (germany).
			after that i did my masters in sound and music computing at universitat pompeu fabra in
			barcelona. i am not very good at playing instruments but my phd topic is in with digital
			musical instruments. i like computers, sound art, books and languages. my website is{' '}
			<a href='https://teresapelinski.com'>www.teresapelinski.com</a> and if you want to send
			me an email you can do it at{' '}
			<a href='mailto:teresapelinski@gmail.com'>teresapelinski@gmail.com</a>.
		</p>
	</div>
)
