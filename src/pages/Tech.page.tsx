import React from 'react'
import { Link } from 'react-router-dom'
import { FootnoteMark, FootnoteText } from '../components/References'

export const TechPage: React.FC = (): JSX.Element => (
	<div id='tech' aria-label='technical notes'>
		<p>
			<div aria-hidden='true'>++++-----</div>
			<br />
			<b>some technical notes:</b> <br />
			The code I used to generate the voice is publicly available{' '}
			<a href='https://github.com/pelinski/colab-tensorflow-wavenet'>here</a>. The deep
			learning algorithm that generates the voice is Wavenet, presented in 2016 by van den
			Oord et al
			<FootnoteMark id={1} />. This choice is motivated by the raw audio nature of the
			algorithm: the architecture is able to capture the recording quality as well as the
			breathing and mouth movement sounds of the speakers. Wavenet is also a generative model:
			it produces sound without having to be conditioned on text. These factors make it a
			suitable architecture to work on the generation of artificial voices (or recorded
			voices) leaving aside semantics. The model was trained on a GPU with 3h of audio divided
			on 10 seconds chunks, which made a total of 1092 files. The total duration of the
			training was around 24h hours for the 100.000 steps. The generation of the final audio
			took around 2.5h, also on a GPU.
			<br />
			<div aria-hidden='true'>--------+++</div>
			<div id='footnotes' aria-label='Footnotes'>
				<br />
				<FootnoteText id={1}>
					van den Oord, A. et al. WaveNet: A Generative Model for Raw Audio (2016). URL{' '}
					<a href='http://arxiv.org/abs/1609.03499'>http://arxiv.org/abs/1609.03499</a>.
				</FootnoteText>
			</div>
		</p>

		<nav>
			<p>
				this project was formed in residency @{' '}
				<a href='https://www.upf.edu/web/phonos/'>phonos</a>
			</p>
			<Link to={'/read'}>
				{' '}
				<div aria-hidden='true'>+++</div>go back
			</Link>
		</nav>
	</div>
)
