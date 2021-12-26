import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import MultiRef from 'react-multi-ref';
import HtmlParser from "react-html-parser";

import { Title } from "../components/Title";
import { ScrollDownButton } from "../components/Buttons";
import { Screen } from "../components/Screen";

import { isOnScreen } from "../api/api.window";

const IntroHtmlText = `<p>hi i'm teresa pelinski and i trained a wavenet using a couple of hours of my dad's field recordings. my dad was an ethnomusicologist and he studied the sword dance at todolella, a very small village close to castellón, in eastern spain. in these tapes, he interviewed the old and the young who inhabit todolella and asks them about how their lives have changed and how cultural identity is represented through music. these tapes were recorded during the 90s. the video corresponds to mounted mini dv tape videos i recorded in september 2020 in an abandoned megaconstruction in north-central spain (ciudad del medioambiente, soria).</p> <p>i found these tapes in a wooden mountain of boxes in his office. my dad does not live anymore, so i guess they do technically belong to me. there are a lot of tapes in his office. are they going to be ever listened again? or will someone just throw them in the bin when i die? this project is about many things, but mainly about listening. in the tapes, there is a voice asking questions: my dad's. this is a voice i had long not heard, a voice i dreamed about but did not dare to press play to hear for many years. i listened to his questions for hours in the process of digitalising the tapes.</p> <p> this project is also about listening to the body who emits this artificial voice. is there such a body? dolar, chion and schaeffer talk about the object in the voice and i collect some of their ideas in the essay you can read <a href="/read">here</a>. this project is still under development as an artistic residency at phonos foundation in barcelona.</p>`

export const HomePage = () => {
    const titleType = "3d"
    const [elementsRefs] = useState(() => new MultiRef())
    const [expandIntro, setExpandIntro] = useState(false)

    /* todo: when not on intro screen, expand intro is false
    const handleExpandIntro = () => {
         if (!isOnScreen({ multiRef: elementsRefs, screenId: "intro" }) && (expandIntro == true))
             setExpandIntro(false)
     }*/
    return (
        <>
            <Screen {...{ id: "title-box", elementsRefs }}>
                <Title type={titleType} />
                <ScrollDownButton scrollTo={"listen"} />
            </Screen>
            <Screen {...{ id: "listen", elementsRefs }}>
                listen
                <ScrollDownButton scrollTo={"intro"} />
            </Screen>
            <Screen {...{ id: "intro", elementsRefs, onClick: () => setExpandIntro(true) }} >
                { /* triggers typewriter only when on screen*/
                    !expandIntro &&
                    isOnScreen({ multiRef: elementsRefs, screenId: "intro" }) &&
                    < Typewriter options={{
                        strings: [IntroHtmlText],
                        autoStart: true,
                        cursor: '',
                        delay: 50,
                        loop: true,
                        deleteSpeed: 0
                    }} />}
                {expandIntro && isOnScreen({ multiRef: elementsRefs, screenId: "intro" }) &&
                    HtmlParser(IntroHtmlText)}
            </Screen>
        </>)
}