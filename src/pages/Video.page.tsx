import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export const VideoPage: React.FC = (): JSX.Element => (
	<>
		<div id='video'>
			<ReactPlayer width={0.8 * window.innerWidth} url='https://vimeo.com/663434042' />
			<span>
				this video corresponds to mounted mini dv tape videos i recorded in september 2020
				in an abandoned construction site in north-central spain (ciudad del medioambiente,
				soria).
			</span>
			<nav>
				<Link to={'/read'}> +++go back </Link>
			</nav>
		</div>
	</>
)
