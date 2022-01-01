import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Title } from '../components/Title'

export const EssayPage: React.FC = (): JSX.Element => {
	useEffect(() => {
		window?.scrollTo(0, 0)
	}) // scroll to top when mounting component

	return (
		<div id='essay'>
			<Title titleStyle={'3d'} />

			<nav>
				<Link to={'/'}> +++go back-- </Link>
				<Link to={'/tldr'}> +++tldr;--</Link>
			</nav>

			<div className='text'>
				<p>
					The title of this work alludes to the multiauthor project{' '}
					<i>No Ghost, Just a Shell</i> (1999-2002) initiated by the french artists
					Philippe Parreno and Pierre Huyghe. The artists purchased the rights of manga
					figure from a Japanese company that manufactures off-the-shelf characters for
					commercial use in animations and comics. The title,{' '}
					<i>No Ghost, Just a Shell</i>, refers to the cyberpunk manga{' '}
					<i>Ghost in the Shell</i> by Matsamune Shirow (1989), that presents a future in
					which humans have cybernized their bodies and brains to different degrees,
					narrowing the difference between human and machine. The main character, Major
					Kusanagi, is a full cyborg: the only human in her cyberbody (shell) is the
					conscience or 'ghost' that inhabits her cyberbrain, which makes her question her
					existence as an hybrid between program and human. The inanimated character
					purchased by Parreno and Huyghe, AnnLee, is a "fictional shell with a copyright"{' '}
					<QuoteMark id={'Paul2003'} num={1} />, an empty figure waiting to be given
					history
					<FootnoteMark id={1} /> or ghost. Parreno and Huyghe distributed the character
					to other artists that created their own interpretations of the AnnLee, "filling
					its empty 'shell'"
					<QuoteMark id={'HuygheParreno2011'} num={2} />. <i>No Shell, Just A Voice</i> is
					a project that reflects on artificially generated voices that appear to have a
					ghost but have no shell, no body.
				</p>

				<h3>Acousmatics and the recorded voice</h3>
				<p>
					The <i>akousmatikoi</i>
					<FootnoteMark id={2} /> or acousmatics were Pythagoras' disciples who received
					the teachings of their master behind a curtain. The purpose of hiding
					Pythagoras' body from the sight of his students, was likely avoiding visual
					distractions caused by the master gestures or appearance. As Mladen Dolar notes,
					there is something mystical in a voice whose emitting source remains unseen:
					"the voice whose source cannot be seen, because it cannot be located, seems to
					emanate from anywhere, everywhere; it gains omnipotence"{' '}
					<QuoteMark id={'Dolar2006'} num={3} />.
				</p>
				<p>
					Pierre Schaeffer recovers the word acousmatic in the context of his{' '}
					<i>Traité des Objets Musicaux</i>, published in 1966. The adjective acousmatic
					is defined as: "indicating a noise which is heard without the causes from which
					it originates being seen"
					<FootnoteMark id={3} />. According to Schaeffer, acousmatic listening is a form
					of reduced listening (écoute réduite) in which we concentrate on the sound
					immanent properties and objectivity
					<FootnoteMark id={4} /> <QuoteMark id={'Kane2014'} num={6} />. In{' '}
					<i>Traité des Objets Musicaux</i>, Schaeffer systematically defines the sound
					object and provides a language for describing the sounds <i>in themselves</i>.
					This is particularly interesting in the case of the voice, that can be a vehicle
					of meaning (convey a message through speech) and simultaneously be a source of
					aesthetic admiration. Yet, what is that becomes omnipresent in the voice of
					Pythagoras behind the veil? Is there something else to the voice than being a
					vehicle of meaning and a source of a aesthetic admiration? In Dolar's words,
					there is an 'object voice' that "does not solidify an object of fetish
					reverence, but [is] an object which functions as a blind spot in the call and as
					a disturbance of aesthetic appreciation" <QuoteMark id={'Dolar2006'} num={3} />.
				</p>
				<p>
					The inventions of the phonograph, the radio or the telephone turn the
					Pythagorean veil into a metaphor of the recording and reproduction technologies
					mediating the voice
					<FootnoteMark id={5} />. Yet these technologies do not only hide the body
					emitting the voice, they also detach the voice from the instant in which it was
					emitted. Moreover, they preserve it – allowing its replay, which constitutes a
					fundamental turn from the instant nature of direct (i.e., non-recorded) sounds.
					For instance, recording technologies bring us back the voices of the dead. As
					Gunning notes,
				</p>
				<blockquote>
					Separated from both its human bodily source and the moment of its origin, the
					recorded voice becomes an alien entity, free-floating and replayable, belonging
					in effect to no one, or perhaps clinging to whoever hears it. As a number of
					commentators have noted, this detached voice transcends not only the fact of
					embodiment, but the physical condition of mortality{' '}
					<QuoteMark id={'Gunning2019'} num={7} />.
				</blockquote>
				<p>
					The spectacular effects of detaching the voice from the body have been
					extensively used in films
					<FootnoteMark id={8} /> <QuoteMark id={'Gunning2019'} num={'7,8'} />
					.In his study of the voice in cinema, Chion{' '}
					<QuoteMark id={'Chion1999'} num={8} />) introduces the figure of the{' '}
					<i> acousmêtre</i> to name the acousmatic voices whose faces have not yet been
					seen, and the <i> visualized acousmêtre</i> to refer to the voices whose face we
					already know.However, this difference assumes that there is indeed a face –and
					by extension, a body– that has produced this voice.Artificially generated
					voices, that do not have a body to hide behind a veil, defy this difference and
					raise the fundamental question: are artificial voices acousmêtres ? And if so,
					what body is it that is hidden behind the veil ?
				</p>

				<h3>Artificially generated voices without a body </h3>
				<p>
					When Italo Calvino wrote "A voice means this: there is a living person, throat,
					chest, feelings, who sends into the air this voice, different from all other
					voices."
					<FootnoteMark id={7} /> , he was surely not thinking on Siri or Alexa. Virtual
					agents with proper names have voices that for certain do not come from a living
					throat or chest, but are artificially synthesized instead. "The voice without a
					body is inherently uncanny", states Dolar in <i>A Voice and Nothing More</i>{' '}
					<QuoteMark id={'Dolar2006'} num={2} />, referring to the mother's voice in the
					movie <i>Psycho</i> (Alfred Hitchcock, 1960). How different is this uncanny in
					the voices that we assume come from a body and the artificial voices that we
					assume come from no body? How can indeed voices come from no body? Deep learning
					techniques train their voices making use of datasets of recorded human speech.
					Are the individuals that gave their voice to the dataset the body behind those
					voices? Current state of the art deep learning speech synthesizing technologies
					generate voices that sound breathing, moving, that bring us closer to forget
					about the artificial in the voice. If the 'robotic' character of the sound is
					overcome, what is it that remains artificial in the voice?
				</p>
				<p>
					Holly Herndon approaches these questions in her album <i>PROTO</i> (4AD, 2019).
					In this record, Herndon adds a new member to her chorus: Spawn, an artificial
					intelligence generated voice trained on recordings gathered in 'training
					ceremonies' with an ensemble of (human) voices. Herndon rejects the idea of
					technology as a dehumanizing agent and uses it to craft hybrid voice, in-between
					the human and the artificial. When asked about the agency of Spawn, Herndon
					states: "Spawn is the ensemble of voices who trained it"{' '}
					<QuoteMark id={'HerndonDryhurst2019'} num={10} />. Herndon does not only give a
					body to Spawn but an ensemble of bodies, the full chorus who trained it. A
					rephrasing of Herndon could be: "Spawn is an acousmêtre and behind the veil
					there's the ensemble of voices who trained it".
				</p>

				<h3>
					The ghost in <i>No shell, Just a Voice</i>
				</h3>
				<p>
					<i>No Shell, Just a Voice</i> is voice generated with deep learning from a
					dataset of digitalized tape voice recordings. It does not attempt to answer any
					of the questions posed above, but to provide a new perspective on the issue. As
					Spawn, the voice in <i>No Shell, Just a Voice</i> is nothing more than the
					recordings it has been trained on. These recordings correspond to interviews my
					father, Ramón Pelinski, conducted during the 90s in Todolella, a small village
					in Els Ports region, in Castellón. These are part of his ethnomusicological
					research
					<FootnoteMark id={8} /> on the sword dance of Todolella. In the tapes, the elder
					and the young that inhabit Todolella and the ermitages in its surroundings talk
					about the life in the region in the past, what has changed, about the identity
					of the village and the sword dance. Most of the old are now deceased, and some
					of them I knew as a kid, as we spent long periods there during those years.
					Since the recordings were in cassette tapes, I listened to all these interviews
					during the process of digitalization. In the tapes there is much more than the
					voice of these people, the is also the silence, the flies, the cars passing by,
					the children screaming in the background. There is also the voice of my dad,
					that I had long not heard. The voice in <i>No Shell, Just a Voice</i> is not
					just a voice –if anything can be concluded, is that voices are never <i>just</i>{' '}
					voices–, it is a recording of a voice, a voice that has no language but does
					refer to a set of bodies. This project was a reflection on the voice in its
					direct, unseen, artificial and recorded forms, and also a process of
					(acousmatic) listening to voice recordings. Recordings that will, most probably,
					not be heard again.
				</p>

				<div id='footnotes'>
					<span className='separator'>-+-+-+-+-+-+-+-+-+-+-</span>
					<FootNoteText id={1}>
						In Parreno's <i>Anywhere Out of the World</i> (2000), AnnLee says: "I am a
						product. A product freed from the marketplace I was supposed to fill... I
						was bought but strangely enough, I do not belong to anybody. I belong to
						whomever is able to fill me with any kind of imaginary material anywhere out
						of the world. I am an imaginary character. I am no ghost, just a shell."{' '}
						<QuoteMark id={'HuygheParreno2011'} num={2} />{' '}
					</FootNoteText>
					<FootNoteText id={2}>
						In greek, <i>akousma</i> means 'a thing heard'{' '}
						<QuoteMark id={'Young2015'} num={4} />.
					</FootNoteText>
					<FootNoteText id={3}>
						Larousse definition cited in <QuoteMark id={'Chion2009'} num={5} />.
					</FootNoteText>
					<FootNoteText id={4}>
						Schaeffer reading of Husselr’s texts directly influences his systematical
						description of the sound object in the <i>Traité des Objets Musicaux</i>{' '}
						<QuoteMark id={'Kane2014'} num={6} />
						.In Husserl’s philosophy, an entity refers to an externally existent thing,
						while an object “only comes into being when it is cognized, when it is
						something capable of being apprehended by a subject”{' '}
						<QuoteMark id={'Kane2014'} num={6} />
						.In other words, entities exist in reality, but it is only through mental
						synthesis that objects can exist.The world can be full of material entities
						but if no subject is there to be concious of them, no objects would exist in
						it.With reference to the sound object, Schaeffer states that "the sound
						object is never revealed clearly except in the acousmatic experience"{' '}
						<QuoteMark id={'Kane2014'} num={6} />.
					</FootNoteText>
					<FootNoteText id={5}>
						In Schaeffer’s words, cited in <QuoteMark id={'Kane2014'} num={6} />: "In
						ancient times, the apparatus was a curtain; today, it is the radio and the
						methods of reproduction, with the whole set of electro-acoustic
						transformations, that place us, modern listeners to an invisible voice,
						under similar circumstances".
					</FootNoteText>
					<FootNoteText id={6}>
						Examples of this are the first appearance of the murder in <i>M</i> by Fritz
						Lang (1931) or the mother’s voice in <i>Psycho</i> by Alfred Hitchcock
						(1960), both mentioned by Chion in <QuoteMark id={'Chion1999'} num={8} />.
					</FootNoteText>
					<FootNoteText id={7}>
						Cited in <QuoteMark id={'Butler2019'} num={9} />.
					</FootNoteText>
					<FootNoteText id={8}>
						His research on the Todolellana sword dance, to which this interviews are
						part of, is published in <QuoteMark id={'Pelinski2011'} num={11} />.
					</FootNoteText>
				</div>

				<div id='refs'>
					<span className='separator'>-+-+-+-+-+-+-+-+-+-+-</span>
					<br />
					<h3>References</h3>

					<span id='Paul2003'>
						[1] Christiane Paul. Digital Art. 1st. London, United Kingdom: Thames and
						Hudson Ltd, 2003, pp. 110–111.
					</span>
					<span id='HuygheParreno2011'>
						[2] Pierre Huyghe and Philippe Parreno: No Ghost Just a Shell. url:{' '}
						<a href='https://icamiami.org/collection/'>
							https://icamiami.org/collection/various-artists-no-ghost-just-a-shell-no-ghost-just-a-shell-1999-2002/
						</a>{' '}
						(visited on 05/04/2021).
					</span>
					<span id='Dolar2006'>
						[3] Mladen Dolar. A Voice and Nothing More. Ed. by Slavoj Žižek. 1st.
						Cambridge, Massachusetts: The MIT Press, 2006. isbn: 0-262-54187-4.
					</span>
					<span id='Young2015'>
						[4] Miranda Young. Singing the Body Electronic: The Human Voice and Sound
						Technology. 1st. Surrey, UK: Ashgate Publishing Limited, 2015. isbn:
						9781472458537.
					</span>
					<span id='Chion2009'>
						[5] Michel Chion. Guide to Sound Objects. Pierre Schae er and Musical
						Research. (English Translation by Dack, J. and North, C.) Paris, France:
						Institut National de L’Audiovisuel &\ Éditions Buchet/Chastel, 2009.
					</span>
					<span id='Kane2014'>
						[6] Brian Kane. ‘Pierre Schaeffer, the Sound Object, and the Acousmatic
						Reduction’. In: Sound Unseen. 1st. New York, NewYork, USA: Oxford University
						Press, 2014, pp. 15–42. doi: 10.1093/acprof:oso/9780199347841. 003.0002.
					</span>
					<span id='Gunning2019'>
						[7] Tom Gunning. ‘A Voice That Is Not Mine: Terror and the Mythology of the
						Technological Voice’. In: The Voice as Something More: Essays Toward
						Materiality. Ed. by Martha Feldman and Judith T. Zeitlin. The University of
						Chicago Press, 2019, pp. 325–338. doi:{' '}
						<a href='https://doi.org/10.7208/chicago/9780226656427.001.0001'>
							https://doi.org/10.7208/chicago/9780226656427.001.0001
						</a>
						.
					</span>
					<span id='Chion1999'>
						[8] Michel Chion. The Voice in Cinema. 1st. New York, USA: Columbia
						University Press, 1999, pp. 17–30. isbn: 0- 231-10823-1.
					</span>
					<span id='Butler2019'>
						[9] Shane Butler. ‘Is the Voice a Myth? A Rereading of Ovid’. In: The Voice
						as Something More: Essays Toward Materiality. Ed. by Martha Feldman and
						Judith T. Zeitlin. 1st. The University of Chicago Press, 2019, pp. 171–187.
						doi:{' '}
						<a href='https://doi.org/10.7208/chicago/9780226656427.001.0001'>
							https://doi.org/10.7208/chicago/9780226656427.001.0001
						</a>
						.
					</span>
					<span id='HerndonDryhurst2019'>
						[10] Sónar+D Talks: Listening to the Voice of #AI, with Holly Herndon and
						Mat Dryhurst. Moderated by Ash Sarkar. 2019. url:{' '}
						<a href='https://youtu.be/k67IKMXzD7A'>https://youtu.be/k67IKMXzD7A</a>{' '}
						(visited on 05/04/2021).
					</span>
					<span id='Pelinski2011'>
						[11] Ramón Pelinski. La Danza de Todolella. Memoria, historia y usos
						políticos de la danza de espadas. 1st. Valencia, España: Institut Valencià
						de la Música \& Generalitat Valenciana, 2011. isbn: 9788448256548.
					</span>
				</div>
			</div>
		</div>
	)
}

const scrollHandler = (scrollTo: string) => (): void =>
	document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })

const FootnoteMark: React.FC<{ id: string | number }> = ({ id }): JSX.Element => (
	<sup className='footnotemark'>
		<span id={`sup${id}`} onClick={scrollHandler(`fn${id}`)}>
			{id}
		</span>
	</sup>
)
const FootNoteText: React.FC<{ id: string | number }> = ({ id, children }): JSX.Element => (
	<span className='footnotetext' id={`fn${id}`} onClick={scrollHandler(`sup${id}`)}>
		<sup>{id}</sup>
		{children}
	</span>
)

const QuoteMark: React.FC<{ id: string; num: string | number }> = ({ id, num }) => (
	<span className='quotemark' onClick={scrollHandler(id)}>
		[{num}]
	</span>
)
