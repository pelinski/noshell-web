import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export const Nav = () => {
	const isRead = useLocation().pathname == '/read'
	const isVideo = useLocation().pathname == '/video'

	return (
		<nav>
			{!isRead && <Link to='/read'>++read more--</Link>}
			{!isVideo && <Link to='/video'>++a video in which i talk about this--</Link>}
			<Link to='/me'>++about me--</Link>
			<Link to='/'>++thx for reading :-)--</Link>
		</nav>
	)
}

export const HomeNav = ({ expandIntro }) => (
	<nav className='home-nav'>
		{!expandIntro && <p>click to trigger text</p>}
		<Link to='/read'>++read more--</Link>
		<Link to='/me'>++about me--</Link>
		<Link to='/'>++thx for reading :-)--</Link>
	</nav>
)
