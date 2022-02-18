import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

import { ScrollArrow } from '../components/Arrows'

export const VideoPage: React.FC = (): JSX.Element => {
	const [showVideo, setShowVideo] = useState<boolean>(false)
	return (
		<div id='videos' aria-label='Videos'>
			<div id='video-1' aria-label='First video'>
				<div className='video'>
					<ReactPlayer
						aria-label='Black and white video. Abruptly cut scenes of an industrial setting, with constant repetitions/loops. '
						width={0.6 * window.innerWidth}
						url='https://vimeo.com/663434042'
					/>
					<span>
						mounted mini dv tape videos i recorded in september 2020 in an abandoned
						construction site in north-central spain (ciudad del medioambiente, soria).
					</span>
				</div>
				<ScrollArrow scrollTo={'video-2'} />
			</div>
			<div id='video-2' aria-label='Second video'>
				<div className='video'>
					<img
						style={{
							display: showVideo ? 'none' : 'inline',
						}}
						onClick={() => setShowVideo(true)}
						src={require('url:~public/thumbnail.png')}
					/>
					<div className='player' style={{ display: showVideo ? 'inline' : 'none' }}>
						<ReactPlayer
							aria-label='Author talking to camera'
							width={0.7 * window.innerWidth}
							playing={showVideo}
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
			<span className='phonos'>
				this project was formed in residency @ {''}
				<a href='https://www.upf.edu/web/phonos/'>phonos</a>
			</span>
			<nav>
				<Link to={'/read'}> +++go back </Link>
			</nav>
		</div>
	)
}
