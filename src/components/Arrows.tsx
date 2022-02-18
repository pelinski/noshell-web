import React from 'react'

export const scrollHandler = (scrollTo: string) => (): void =>
	document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })

export const ScrollArrow: React.FC<{ scrollTo: string; flip?: boolean }> = ({
	scrollTo,
	flip = false,
}): JSX.Element => (
	<a
		aria-role='Button'
		aria-label={`Scroll to ${scrollTo}`}
		onClick={scrollHandler(scrollTo)}
		className={flip ? 'button flip' : 'button'}
	>
		<div aria-hidden={true}>----{'>'}</div>
	</a>
)

export const ScrollArrowSide: React.FC<{ scrollTo: string; side: string; flip?: boolean }> = ({
	scrollTo,
	side,
	flip = false,
}): JSX.Element => (
	<div className={`arrow ${side}`} aria-role='Button'>
		<a
			aria-label={`Scroll to ${scrollTo}`}
			onClick={scrollHandler(scrollTo)}
			className={flip ? `flip ${side}` : `${side}`}
		>
			<div aria-hidden={true}>----{'>'}</div>
		</a>
	</div>
)

export const arrowsHandler = ({
	e,
	prev,
	next,
}: {
	e: React.KeyboardEvent<HTMLDivElement>
	prev?: string
	next?: string
}): void => {
	if (prev && e.key == 'ArrowUp')
		document.getElementById(prev)?.scrollIntoView({ behavior: 'smooth' })
	if (next && e.key == 'ArrowDown')
		document.getElementById(next)?.scrollIntoView({ behavior: 'smooth' })
}
