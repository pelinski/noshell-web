import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export const VideoPage = () => (
	<>
		<nav>
			<Link to={'/'}> +++go home </Link>
		</nav>
		<ReactPlayer width={0.8 * window.innerWidth} url='https://youtu.be/ikx-Uhnh_d8?t=585' />
	</>
)
