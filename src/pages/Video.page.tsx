import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

import { ScrollArrow } from '../components/Arrows'

export const VideoPage: React.FC = (): JSX.Element => {
	const [showVideo, setShowVideo] = useState<boolean>(false)
	return (
		<div id='videos'>
			<div id='video-1'>
				<div className='video'>
					<ReactPlayer
						width={0.6 * window.innerWidth}
						url='https://vimeo.com/663434042'
					/>
					<span>
						this video corresponds to mounted mini dv tape videos i recorded in
						september 2020 in an abandoned construction site in north-central spain
						(ciudad del medioambiente, soria).
					</span>
				</div>
				<ScrollArrow scrollTo={'video-2'} />
			</div>
			<div id='video-2'>
				<div className='video'>
					<img
						style={{
							display: showVideo ? 'none' : 'inline',
							width: 0.6 * window.innerWidth,
						}}
						onClick={() => setShowVideo(true)}
						src={require('url:~public/thumbnail.png')}
					/>
					<div style={{ display: showVideo ? 'inline' : 'none' }}>
						<ReactPlayer
							playing={showVideo}
							width={0.6 * window.innerWidth}
							url='https://youtu.be/ikx-Uhnh_d8?t=584'
						/>
					</div>
					<span>
						i talked about this project at visiones sonoras festival in morelia (mexico)
						in september 2021
					</span>
				</div>
				<ScrollArrow scrollTo={'video-1'} flip={true} />
			</div>
			<nav>
				<Link to={'/read'}> +++go back </Link>
			</nav>
		</div>
	)
}
