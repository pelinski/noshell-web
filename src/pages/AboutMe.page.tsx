import React from 'react'
import { Link } from 'react-router-dom'

export const AboutMePage: React.FC = (): JSX.Element => (
	<div id='aboutme'>
		<nav>
			<Link to={'/read'}> +++go back </Link>
		</nav>
		<p>
			i am teresa pelinski, a phd researcher in artificial intelligence and music at queen
			mary university of london. i did my undergrad in physics but i was mainly interested in
			sound so i studied one year of acoustics and after that, did my masters in sound and
			music computing. i am not very good at playing instruments but my phd topic is in
			digital musical instruments. i like computers, books and languages. my website is{' '}
			<a href='https://teresapelinski.com'>www.teresapelinski.com</a> and if for whatever
			reason you want to send me an email you can do it at{' '}
			<a href='mailto:teresapelinski@gmail.com'>teresapelinski@gmail.com</a>.
		</p>
	</div>
)
