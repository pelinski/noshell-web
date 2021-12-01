import React from "react";
import { Link } from "react-router-dom";
import 'react-a11y-footnotes/dist/styles.css'
import {
    FootnotesProvider,
    FootnoteRef as Ref,
    Footnotes,
} from 'react-a11y-footnotes'


export const EssayPage = () => (<>
    <Link to={'/'}> go back home</Link>
    <FootnotesProvider>
        <p> The title of this work alludes to the multiauthor project <i>No Ghost, Just a Shell</i> (1999-2002) initiated by the french artists Philippe Parreno and Pierre Huyghe. The artists purchased the rights of manga figure from a Japanese company that manufactures off-the-shelf characters for commercial use in animations and comics. The title, <i>No Ghost, Just a Shell</i>, refers to the cyberpunk manga <i>Ghost in the Shell</i> by Matsamune Shirow (1989), that presents a future in which humans have cybernized their bodies and brains to different degrees, narrowing the difference between human and machine. The main character, Major Kusanagi, is a full cyborg: the only human in her cyberbody (shell) is the conscience or `ghost' that inhabits her cyberbrain, which makes her question her existence as an hybrid between program and human.  The inanimated character purchased by Parreno and Huyghe, AnnLee, is a ``fictional shell with a copyright''  [1], an empty figure waiting to be given a <Ref description="footnote1">history</Ref> or ghost. Parreno and Huyghe distributed the character to other artists that created their own interpretations of the AnnLee, ``filling its empty `shell'''[2]. <i>No Shell, Just A Voice</i> is a project that reflects on artificially generated voices that appear to have a ghost but have no shell, no body.</p>
        <h3>----acousmatics and the recorded voice</h3>
        <p>The <Ref description="footnote2"><i>akousmatikoi</i></Ref> or acousmatics were Pythagoras' disciples who received the teachings of their master behind a curtain. We can imagine the purpose of hiding Pythagoras' body from the sight of his students, likely avoiding visual distractions caused by theatrical gestures accentuating particular lecture parts or in general, the physical behaviour and appearance of the master. As Mladen Dolar notes, there is something mystical in a voice whose emitting source remains unseen: ``the voice whose source cannot be seen, because it cannot be located, seems to emanate from anywhere, everywhere; it gains omnipotence'' (Dolar 2006).</p>
        <p>
            Pierre Schaeffer recovers the word acousmatic in the context of his <i>Traité des Objets Musicaux</i>, published in 1966. The adjective acousmatic is defined as: ``indicating a noise which is heard without the causes from which it originates being seen''. According to Schaeffer, acousmatic listening is a form of reduced listening (écoute réduite) in which we concentrate on the sound immanent properties and objectivity (Kane 2014). In <i>Traité des Objets Musicaux</i>, Schaeffer systematically defines the sound object and provides a language for describing the sounds <i>in themselves</i>. This is particularly interesting in the case of the voice, that can be a vehicle of meaning (convey a message through speech) and simultaneously be a source of aesthetic admiration. Yet, what is that becomes omnipresent in the voice of Pythagoras behind the veil? Is there something else to the voice than being a vehicle of meaning and a source of a aesthetic admiration? In Dolar's words, there is an `object voice' that ``does not solidify an object of fetish reverence, but [is] an object which functions as a blind spot in the call and as a disturbance of aesthetic appreciation'' (Dolar2006).
        </p>

        <Footnotes />
    </FootnotesProvider>
</>)