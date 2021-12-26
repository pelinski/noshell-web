import React, { useState, useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';
import HtmlParser from "react-html-parser";

import { Title } from "../components/Title";
import { ScrollButton, ScrollBasicButton } from "../components/Buttons";
import { HomeNav } from "../components/Nav";

const IntroHtmlText = `<p>+</p> <p>hi i'm teresa pelinski and i trained a wavenet using a couple of hours of my dad's field recordings. my dad was an ethnomusicologist and he studied the sword dance at todolella, a very small village close to castellón, in eastern spain. in these tapes, he interviewed the old and the young who inhabit todolella and asks them about how their lives have changed and how cultural identity is represented through music. these tapes were recorded during the 90s. the video corresponds to mounted mini dv tape videos i recorded in september 2020 in an abandoned megaconstruction in north-central spain (ciudad del medioambiente, soria).</p> <p>i found these tapes in a wooden mountain of boxes in his office. my dad does not live anymore, so i guess they do technically belong to me. there are a lot of tapes in his office. are they going to be ever listened again? or will someone just throw them in the bin when i die? this project is about many things, but mainly about listening. in the tapes, there is a voice asking questions: my dad's. this is a voice i had long not heard, a voice i dreamed about but did not dare to press play to hear for many years. i listened to his questions for hours in the process of digitalising the tapes.</p> <p> this project is also about listening to the body who emits this artificial voice. is there such a body? dolar, chion and schaeffer talk about the object in the voice and i collect some of their ideas in the essay you can read <a href="/read">here</a>. this project is still under development as an artistic residency at phonos foundation in barcelona.</p> <p>+</p>`

export const HomePage = () => {


    return (
        <>
            <div className='screen' id='title-box' tabIndex={0}>
                <Title type={'3d'} />
                <ScrollButton scrollTo={'listen'} />
            </div>
            <div className='screen' id='listen' tabIndex={1} >
                <ScrollBasicButton scrollTo={'title-box'} flip={true} />
                listen
                <ScrollBasicButton scrollTo={'intro'} />
            </div>
            <Description />
        </>
    )
}

const Description = () => {
    const self = useRef()
    const [expandIntro, setExpandIntro] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const dim = self.current?.getBoundingClientRect()
            if (dim.top > window.innerHeight || dim.bottom < 0 || dim.left > window.innerWidth || dim.right < 0)
                setExpandIntro(false)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className='screen' id='intro' ref={self} onClick={() => setExpandIntro(true)}>
            <ScrollBasicButton scrollTo={'listen'} flip={true} />
            <div className="content-wrapper">
                {expandIntro ? (
                    HtmlParser(`<div class="Typewriter"> ${IntroHtmlText}</div>`)
                ) : (
                    <Typewriter
                        options={{
                            strings: [IntroHtmlText],
                            autoStart: true,
                            cursor: '',
                            delay: 50,
                            loop: true,
                            deleteSpeed: 0,
                            wrapperClassName: "typewriter"
                        }}
                    />
                )}
                <HomeNav {...{ expandIntro }} />
            </div>
        </div>
    )
}