import React from 'react'
import { Link } from 'react-router-dom'

export const Tldr = () => (
	<div id='tldr'>
		<h3>
			++++-----
			<br />
			<b>tldr;</b>
			<br />
			mladen dolar 2010: with the voice one always impersonates oneself. <br />
			who is it that is being impersonated when the voice is being artificially generated?
			<br />
			--------+++
		</h3>
		<nav>
			<Link to={'/'}> +++go home </Link>
		</nav>
	</div>
)
