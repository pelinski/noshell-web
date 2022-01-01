import React from 'react'

export const ScrollButton: React.FC<{ scrollTo: string; flip?: boolean }> = ({
	scrollTo,
	flip = false,
}) => (
	<a onClick={scrollHandler(scrollTo)} className={flip ? 'button flip' : 'button'}>
		_____<span>/\\\</span>________<span>/\\\</span>______
		<br />
		&nbsp;____<span>\/\\\</span>_______<span>\/\\\</span>______
		<br />
		&nbsp;&nbsp;____<span>\//\\\</span>______<span>/\\\</span>_______
		<br />
		&nbsp;&nbsp;&nbsp;_____<span>\//\\\</span>____<span>/\\\</span>________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;______<span>\//\\\</span>__<span>/\\\</span>_________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______<span>\//\\\/\\\</span>__________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________<span>\//\\\\\</span>___________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\//\\\</span>____________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___________<span>\///</span>_____________
		<br />
	</a>
)

export const ScrollDownLargeButton: React.FC<{ scrollTo: string }> = ({ scrollTo }) => (
	<a onClick={scrollHandler(scrollTo)} className='button'>
		__________<span>/\\\</span>_____________
		<br />
		&nbsp;_________<span>\/\\\</span>_____________
		<br />
		&nbsp;&nbsp;_________<span>\/\\\</span>_____________
		<br />
		&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\///</span>______________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____<span>/\\\</span>________
		<span>/\\\</span>______
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<span>\/\\\</span>_______
		<span>\/\\\</span>______
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<span>\//\\\</span>
		______<span>/\\\</span>_______
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____
		<span>\//\\\</span>____<span>/\\\</span>________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______
		<span>\//\\\</span>__<span>/\\\</span>_________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______
		<span>\//\\\/\\\</span>__________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________
		<span>\//\\\\\</span>___________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________
		<span>\//\\\</span>____________
		<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________
		<span>\///</span>______________
		<br />
	</a>
)

export const ScrollBasicButton: React.FC<{ scrollTo: string; flip?: boolean }> = ({
	scrollTo,
	flip = false,
}): JSX.Element => (
	<a
		onClick={scrollHandler(scrollTo)}
		className={flip ? 'button basic-button flip' : 'button basic-button'}
	>
		| <br />
		| <br />
		| <br />
		| <br />
		v <br />
	</a>
)

const scrollHandler = (scrollTo: string) => (): void =>
	document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
