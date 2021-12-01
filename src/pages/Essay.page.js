import React from "react";
import { Link } from "react-router-dom";
import 'react-a11y-footnotes/dist/styles.css'
import {
    FootnotesProvider,
    FootnoteRef as Ref,
    Footnotes,
} from 'react-a11y-footnotes'


export const EssayPage = () => (<>
    <nav>
        <Link to={'/'}> +++go back-- </Link>
        <Link to={'/tldr'}> +++tldr;--</Link>
    </nav>

    <FootnotesProvider>
        <div className='title'>
            <h1>+++no shell</h1>
            <h1>just a voice+++</h1>
        </div>

        <p>
            The title of this work alludes to the multiauthor project <i>No Ghost, Just a Shell</i> (1999-2002) initiated by the french artists Philippe Parreno and Pierre Huyghe. The artists purchased the rights of manga figure from a Japanese company that manufactures off-the-shelf characters for commercial use in animations and comics. The title, <i>No Ghost, Just a Shell</i>, refers to the cyberpunk manga <i>Ghost in the Shell</i> by Matsamune Shirow (1989), that presents a future in which humans have cybernized their bodies and brains to different degrees, narrowing the difference between human and machine. The main character, Major Kusanagi, is a full cyborg: the only human in her cyberbody (shell) is the conscience or `ghost' that inhabits her cyberbrain, which makes her question her existence as an hybrid between program and human.  The inanimated character purchased by Parreno and Huyghe, AnnLee, is a ``fictional shell with a copyright''  [1], an empty figure waiting to be given a <Ref description="footnote1">history</Ref> or ghost. Parreno and Huyghe distributed the character to other artists that created their own interpretations of the AnnLee, ``filling its empty `shell'''[2]. <i>No Shell, Just A Voice</i> is a project that reflects on artificially generated voices that appear to have a ghost but have no shell, no body.
        </p>

        <h3>+++acousmatics and the recorded voice</h3>
        <p>
            The <Ref description="footnote2"><i>akousmatikoi</i></Ref> or acousmatics were Pythagoras' disciples who received the teachings of their master behind a curtain. We can imagine the purpose of hiding Pythagoras' body from the sight of his students, likely avoiding visual distractions caused by theatrical gestures accentuating particular lecture parts or in general, the physical behaviour and appearance of the master. As Mladen Dolar notes, there is something mystical in a voice whose emitting source remains unseen: ``the voice whose source cannot be seen, because it cannot be located, seems to emanate from anywhere, everywhere; it gains omnipotence'' (Dolar 2006).
        </p>
        <p>
            Pierre Schaeffer recovers the word acousmatic in the context of his <i>Traité des Objets Musicaux</i>, published in 1966. The adjective acousmatic is defined as: ``indicating a noise which is heard without the causes from which it originates being seen''. According to Schaeffer, acousmatic listening is a form of reduced listening (écoute réduite) in which we concentrate on the sound immanent properties and objectivity (Kane 2014). In <i>Traité des Objets Musicaux</i>, Schaeffer systematically defines the sound object and provides a language for describing the sounds <i>in themselves</i>. This is particularly interesting in the case of the voice, that can be a vehicle of meaning (convey a message through speech) and simultaneously be a source of aesthetic admiration. Yet, what is that becomes omnipresent in the voice of Pythagoras behind the veil? Is there something else to the voice than being a vehicle of meaning and a source of a aesthetic admiration? In Dolar's words, there is an `object voice' that ``does not solidify an object of fetish reverence, but [is] an object which functions as a blind spot in the call and as a disturbance of aesthetic appreciation'' (Dolar 2006).
        </p>
        <p>
            The inventions of the phonograph, the radio or the telephone turn the Pythagorean veil into a metaphor of the recording and reproduction technologies mediating the voice\footnotemark. Yet these technologies do not only hide the body emitting the voice, they also detach the voice from the instant in which it was emitted. Moreover, they preserve it – allowing its replay, which constitutes a fundamental turn from the instant nature of direct (i.e., non-recorded) sounds. For instance, recording technologies bring us back the voices of the dead. As Gunning notes,
        </p>
        <p>
            Separated from both its human bodily source and the moment of its origin, the recorded voice becomes an alien entity, free-floating and replayable, belonging in effect to no one, or perhaps clinging to whoever hears it. As a number of commentators have noted, this detached voice transcends not only the fact of embodiment, but the physical condition of mortality Gunning2019.
        </p>
        <p>
            The spectacular effects of detaching the voice from the body have been extensively used in films\footnotemark  (Gunning2019, Chion1999). In his study of the voice in cinema, Chion (Chion1999) introduces the figure of the <i>acousmêtre</i> to name the acousmatic voices whose faces have not yet been seen, and the <i>visualized acousmêtre</i> to refer to the voices whose face we already know. However, this difference assumes that there is indeed a face –and by extension, a body– that has produced this voice. Artificially generated voices, that do not have a body to hide behind a veil, defy this difference and raise the fundamental question: are artificial voices acousmêtres? And if so, what body is it that is hidden behind the veil?
        </p>

        <h3>+++artificially generated voices without a body </h3>
        <p>When Italo Calvino wrote ``A voice means this: there is a living person, throat, chest, feelings, who sends into the air this voice, different from all other voices.''\footnotemark , he was surely not thinking on virtual agents such as Siri or Alexa. Those agents with proper names have voices that for certain do not come from a living throat or chest, but are artificially synthesized instead. ``The voice without a body is inherently uncanny'', states Dolar in <i>A Voice and Nothing More</i> (Dolar2006), referring to the mother's voice in the movie Psycho (Alfred Hitchcock, 1960). How different is this uncanny in the voices that we assume come from a body and the artificial voices that we assume come from no body? How can indeed voices come from no body? Deep learning techniques train their voices making use of datasets of recorded human speech. Are the individuals that gave their voice to the dataset the body behind those voices? Current state of the art deep learning speech synthesizing technologies generate voices that sound breathing, moving, that bring us closer to forget about the artificial in the voice. If the `robotic' character of the sound is overcome, what is it that remains artificial in the voice?</p>
        <p>
            Holly Herndon approaches these questions in her album PROTO (4AD, 2019). In this record, Herndon adds a new member to her chorus: Spawn, an artificial intelligence generated voice trained on recordings gathered in `training ceremonies’ with an ensemble of (human) voices. Herndon rejects the idea of technology as a dehumanizing agent and uses it to craft hybrid voice, in-between the human and the artificial.  When asked about the agency of Spawn, Herndon states: ``Spawn is the ensemble of voices who trained it'' (Sonar). Herndon does not only give a body to Spawn but an ensemble of bodies, the full chorus who trained it. A rephrasing of Herndon could be: ``Spawn is an acousmêtre and behind the veil there's the ensemble of voices who trained it''.
        </p>

        <h3>+++the ghost in <i>no shell, just a ghost</i></h3>
        <p>
            <i>No Shell, Just a Voice</i> is voice generated with deep learning from a dataset of digitalized tape voice recordings. It does not attempt to answer any of the questions posed above, but to provide a new perspective on the issue. As Spawn, the voice in <i>No Shell, Just a Voice</i> is nothing more than the recordings it has been trained on. These recordings correspond to interviews my father, Ramón Pelinski, conducted during the 90s in Todolella, a small village in Els Ports region, in Castellón. These are part of his ethnomusicological research\footnotemark on the sword dance of Todolella. In the tapes, the elder and the young that inhabit Todolella and the ermitages in its surroundings talk about the life in the region in the past, what has changed, about the identity of the village and the sword dance. Most of the old are now deceased, and some of them I knew as a kid, as we spent long periods there during those years. Since the recordings were in cassette tapes, I listened to all these interviews during the process of digitalization. In the tapes there is much more than the voice of these people, the is also the silence, the flies, the cars passing by, the children screaming in the background. There is also the voice of my dad, that I had long not heard. The voice in <i>No Shell, Just a Voice</i> is not just a voice –if anything can be concluded, is that voices are never <i>just</i> voices–, it is a recording of a voice, a voice that has no language but does refer to a set of bodies. This project was a reflection on the voice in its direct, unseen, artificial and recorded forms, and also a process of (acousmatic) listening to voice recordings. Recordings that will, most probably, not be heard again.
        </p>

        <Footnotes />
    </FootnotesProvider>
</>)