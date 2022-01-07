import React from 'react'
import { scrollHandler } from '../components/Arrows'

export const FootnoteMark: React.FC<{ id: string | number }> = ({ id }): JSX.Element => (
	<sup className='footnotemark'>
		<span id={`sup${id}`} onClick={scrollHandler(`fn${id}`)}>
			{id}
		</span>
	</sup>
)
export const FootnoteText: React.FC<{ id: string | number }> = ({ id, children }): JSX.Element => (
	<span className='footnotetext' id={`fn${id}`} onClick={scrollHandler(`sup${id}`)}>
		<sup>{id}</sup>
		{children}
	</span>
)

export const QuoteMark: React.FC<{ id: string; num: string | number }> = ({ id, num }) => (
	<span className='quotemark' onClick={scrollHandler(id)}>
		[{num}]
	</span>
)
