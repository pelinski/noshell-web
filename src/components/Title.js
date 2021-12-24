import React from "react"

export const ParsedTitle = ({ type }) => {
    switch (type) {
        case "3d":
            return (
                <>
                    <div>
                        __<span>/\\\\\</span>_____<span>/\\\</span>_______<span>/\\\\\</span>______________<span>/\\\\\\\\\\\</span>____<span>/\\\</span>________<span>/\\\</span>__<span>/\\\\\\\\\\\\\\\</span>__<span>/\\\</span>______________<span>/\\\</span>____________________<br />
                        &nbsp;_<span>\/\\\\\\</span>___<span>\/\\\</span>_____<span>/\\\///\\\</span>__________<span>/\\\/////////\\\</span>_<span>\/\\\</span>_______<span>\/\\\</span>_<span>\/\\\///////////</span>__<span>\/\\\</span>_____________<span>\/\\\</span>____________________<br />
                        &nbsp;&nbsp;_<span>\/\\\/\\\</span>__<span>\/\\\</span>___<span>/\\\/</span>__<span>\///\\\</span>_______<span>\//\\\</span>______<span>\///</span>__<span>\/\\\</span>_______<span>\/\\\</span>_<span>\/\\\</span>_____________<span>\/\\\</span>_____________<span>\/\\\</span>____________________<br />
                        &nbsp;&nbsp;&nbsp;_<span>\/\\\//\\\</span>_<span>\/\\\</span>__<span>/\\\</span>______<span>\//\\\</span>_______<span>\////\\\</span>_________<span>\/\\\\\\\\\\\\\\\</span>_<span>\/\\\\\\\\\\\</span>_____<span>\/\\\</span>_____________<span>\/\\\</span>____________________<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;_<span>\/\\\\//\\\\/\\\</span>_<span>\/\\\</span>_______<span>\/\\\</span>__________<span>\////\\\</span>______<span>\/\\\/////////\\\</span>_<span>\/\\\///////</span>______<span>\/\\\</span>_____________<span>\/\\\</span>____________________<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_<span>\/\\\</span>_<span>\//\\\/\\\</span>_<span>\//\\\</span>______<span>/\\\</span>______________<span>\////\\\</span>___<span>\/\\\</span>_______<span>\/\\\</span>_<span>\/\\\</span>_____________<span>\/\\\</span>_____________<span>\/\\\</span>______________<span>/\\\\</span>_<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_<span>\/\\\</span>__<span>\//\\\\\\</span>__<span>\///\\\</span>__<span>/\\\</span>_________<span>/\\\</span>______<span>\//\\\</span>__<span>\/\\\</span>_______<span>\/\\\</span>_<span>\/\\\</span>_____________<span>\/\\\</span>_____________<span>\/\\\</span>_____________<span>\///\\</span>_<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_<span>\/\\\</span>___<span>\//\\\\\</span>____<span>\///\\\\\/</span>_________<span>\///\\\\\\\\\\\/</span>___<span>\/\\\</span>_______<span>\/\\\</span>_<span>\/\\\\\\\\\\\\\\\</span>_<span>\/\\\\\\\\\\\\\\\</span>_<span>\/\\\\\\\\\\\\\\\</span>__<span>/\\/</span>__<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_<span>\///</span>_____<span>\/////</span>_______<span>\/////</span>_____________<span>\///////////</span>_____<span>\///</span>________<span>\///</span>__<span>\///////////////</span>__<span>\///////////////</span>__<span>\///////////////</span>__<span>\//</span>____<br />
                        <br />
                    </div>
                    <div>
                        ______<span>/\\\\\\\\\\\</span>__<span>/\\\</span>________<span>/\\\</span>_____<span>/\\\\\\\\\\\</span>____<span>/\\\\\\\\\\\\\\\</span>_________<span>/\\\\\\\\\</span>_________<span>/\\\</span>________<span>/\\\</span>_______<span>/\\\\\</span>_______<span>/\\\\\\\\\\\</span>________<span>/\\\\\\\\\</span>__<span>/\\\\\\\\\\\\\\\</span>_<br />
                        &nbsp;_____<span>\/////\\\///</span>__<span>\/\\\</span>_______<span>\/\\\</span>___<span>/\\\/////////\\\</span>_<span>\///////\\\/////</span>________<span>/\\\\\\\\\\\\\</span>______<span>\/\\\</span>_______<span>\/\\\</span>_____<span>/\\\///\\\</span>____<span>\/////\\\///</span>______<span>/\\\////////</span>__<span>\/\\\///////////</span>__<br />
                        &nbsp;&nbsp;_________<span>\/\\\</span>_____<span>\/\\\</span>_______<span>\/\\\</span>__<span>\//\\\</span>______<span>\///</span>________<span>\/\\\</span>____________<span>/\\\/////////\\\</span>_____<span>\//\\\</span>______<span>/\\\</span>____<span>/\\\/</span>__<span>\///\\\</span>______<span>\/\\\</span>_______<span>/\\\/</span>___________<span>\/\\\</span>_____________<br />
                        &nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____<span>\/\\\</span>_______<span>\/\\\</span>___<span>\////\\\</span>_______________<span>\/\\\</span>___________<span>\/\\\</span>_______<span>\/\\\</span>______<span>\//\\\</span>____<span>/\\\</span>____<span>/\\\</span>______<span>\//\\\</span>_____<span>\/\\\</span>______<span>/\\\</span>_____________<span>\/\\\\\\\\\\\</span>_____<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____<span>\/\\\</span>_______<span>\/\\\</span>______<span>\////\\\</span>____________<span>\/\\\</span>___________<span>\/\\\\\\\\\\\\\\\</span>_______<span>\//\\\</span>__<span>/\\\</span>____<span>\/\\\</span>_______<span>\/\\\</span>_____<span>\/\\\</span>_____<span>\/\\\</span>_____________<span>\/\\\///////</span>______<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____<span>\/\\\</span>_______<span>\/\\\</span>_________<span>\////\\\</span>_________<span>\/\\\</span>___________<span>\/\\\/////////\\\</span>________<span>\//\\\/\\\</span>_____<span>\//\\\</span>______<span>/\\\</span>______<span>\/\\\</span>_____<span>\//\\\</span>____________<span>\/\\\</span>_____________<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__<span>/\\\</span>___<span>\/\\\</span>_____<span>\//\\\</span>______<span>/\\\</span>___<span>/\\\</span>______<span>\//\\\</span>________<span>\/\\\</span>___________<span>\/\\\</span>_______<span>\/\\\</span>_________<span>\//\\\\\</span>_______<span>\///\\\</span>__<span>/\\\</span>________<span>\/\\\</span>______<span>\///\\\</span>__________<span>\/\\\</span>_____________<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_<span>\//\\\\\\\\\</span>_______<span>\///\\\\\\\\\/</span>___<span>\///\\\\\\\\\\\/</span>_________<span>\/\\\</span>___________<span>\/\\\</span>_______<span>\/\\\</span>__________<span>\//\\\</span>__________<span>\///\\\\\/</span>______<span>/\\\\\\\\\\\</span>____<span>\////\\\\\\\\\</span>_<span>\/\\\\\\\\\\\\\\\</span>_<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__<span>\/////////</span>__________<span>\/////////</span>_______<span>\///////////</span>___________<span>\///</span>____________<span>\///</span>________<span>\///</span>____________<span>\///</span>_____________<span>\/////</span>_______<span>\///////////</span>________<span>\/////////</span>__<span>\///////////////</span>__
                    </div>
                </>)
        case "grid":
            return (

                <>
                    <div>
                        ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋┏┓╋╋┏┓╋╋╋╋╋<br />
                        ╋┏━┓╋╋┏━━┓╋╋╋╋┏━━┓╋┃┗━┓╋┏━━┓╋┃┃╋╋┃┃╋╋╋╋╋<br />
                        ╋┃┏┓┓╋┃┏┓┃╋╋╋╋┃━━┫╋┃┏┓┃╋┃┃━┫╋┃┃╋╋┃┃╋╋╋╋╋<br />
                        ╋┃┃┃┃╋┃┗┛┃╋╋╋╋┣━━┃╋┃┃┃┃╋┃┃━┫╋┃┗┓╋┃┗┓╋╋╋╋<br />
                        ╋┗┛┗┛╋┗━━┛╋╋╋╋┗━━┛╋┗┛┗┛╋┗━━┛╋┗━┛╋┗━┛╋┏┓╋<br />
                        ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┗┫╋<br />
                    </div>
                    <br />
                    <div>
                        ╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋<br />
                        ╋╋┗┛╋┏┓┏┓╋┏━━┓╋┏┛┗┓╋╋╋╋┏━━┓╋╋╋╋┏┓┏┓╋┏━━┓╋┗┛╋┏━━┓╋┏━━┓╋<br />
                        ╋╋┏┓╋┃┃┃┃╋┃━━┫╋┗┓┏┛╋╋╋╋┃┏┓┃╋╋╋╋┃┗┛┃╋┃┏┓┃╋┏┓╋┃┏━┛╋┃┃━┫╋<br />
                        ╋╋┃┃╋┃┗┛┃╋┣━━┃╋╋┃┗┓╋╋╋╋┃┏┓┃╋╋╋╋┗┓┏┛╋┃┗┛┃╋┃┃╋┃┗━┓╋┃┃━┫╋<br />
                        ╋┏┛┃╋┗━━┛╋┗━━┛╋╋┗━┛╋╋╋╋┗┛┗┛╋╋╋╋╋┗┛╋╋┗━━┛╋┗┛╋┗━━┛╋┗━━┛╋<br />
                        ╋┗━┛╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋
                    </div>
                </>)

        case "pallet":
            return (
                <>
                    <div>
                        ─╔═╗─╔╗─╔═══╗─────╔═══╗─╔╗─╔╗─╔═══╗─╔╗────╔╗────╔╗─<br />
                        ─║║╚╗║║─║╔═╗║─────║╔═╗║─║║─║║─║╔══╝─║║────║║────║║─<br />
                        ─║╔╗╚╝║─║║─║║─────║╚══╗─║╚═╝║─║╚══╗─║║────║║────╚╝─<br />
                        ─║║╚╗║║─║║─║║─────╚══╗║─║╔═╗║─║╔══╝─║║─╔╗─║║─╔╗─╔╗─<br />
                        ─║║─║║║─║╚═╝║─────║╚═╝║─║║─║║─║╚══╗─║╚═╝║─║╚═╝║─╚╣─<br />
                        ─╚╝─╚═╝─╚═══╝─────╚═══╝─╚╝─╚╝─╚═══╝─╚═══╝─╚═══╝──╝─<br />
                    </div>
                    <br />
                    <div>
                        ───╔╗─╔╗─╔╗─╔═══╗─╔════╗─────╔═══╗─────╔╗──╔╗─╔═══╗─╔══╗─╔═══╗─╔═══╗─<br />
                        ───║║─║║─║║─║╔═╗║─║╔╗╔╗║─────║╔═╗║─────║╚╗╔╝║─║╔═╗║─╚╣╠╝─║╔═╗║─║╔══╝─<br />
                        ───║║─║║─║║─║╚══╗─╚╝║║╚╝─────║║─║║─────╚╗║║╔╝─║║─║║──║║──║║─╚╝─║╚══╗─<br />
                        ─╔╗║║─║║─║║─╚══╗║───║║───────║╚═╝║──────║╚╝║──║║─║║──║║──║║─╔╗─║╔══╝─<br />
                        ─║╚╝║─║╚═╝║─║╚═╝║───║║───────║╔═╗║──────╚╗╔╝──║╚═╝║─╔╣╠╗─║╚═╝║─║╚══╗─<br />
                        ─╚══╝─╚═══╝─╚═══╝───╚╝───────╚╝─╚╝───────╚╝───╚═══╝─╚══╝─╚═══╝─╚═══╝─
                    </div>

                </>
            )
        case "slick":
            return (
                <>
                    <div>
                        ╱<span >╭━╮</span>╱<span >╭╮</span>╱<span >╭━━━╮</span>╱╱╱╱╱<span >╭━━━╮</span>╱<span >╭╮</span>╱<span >╭╮</span>╱<span >╭━━━╮</span>╱<span >╭╮</span>╱╱╱╱<span >╭╮</span>╱╱╱╱╱╱╱<br />
                        ╱<span >┃┃╰╮┃┃</span>╱<span >┃╭━╮┃</span>╱╱╱╱╱<span >┃╭━╮┃</span>╱<span >┃┃</span>╱<span >┃┃</span>╱<span >┃╭━━╯</span>╱<span >┃┃</span>╱╱╱╱<span >┃┃</span>╱╱╱╱╱╱╱<br />
                        ╱<span >┃╭╮╰╯┃</span>╱<span >┃┃</span>╱<span >┃┃</span>╱╱╱╱╱<span >┃╰━━╮</span>╱<span >┃╰━╯┃</span>╱<span >┃╰━━╮</span>╱<span >┃┃</span>╱╱╱╱<span >┃┃</span>╱╱╱╱╱╱╱<br />
                        ╱<span >┃┃╰╮┃┃</span>╱<span >┃┃</span>╱<span >┃┃</span>╱╱╱╱╱<span >╰━━╮┃</span>╱<span >┃╭━╮┃</span>╱<span >┃╭━━╯</span>╱<span >┃┃</span>╱<span >╭╮</span>╱<span >┃┃</span>╱<span >╭╮</span>╱<span >╭╮</span>╱<br />
                        ╱<span >┃┃</span>╱<span >┃┃┃</span>╱<span >┃╰━╯┃</span>╱╱╱╱╱<span >┃╰━╯┃</span>╱<span >┃┃</span>╱<span >┃┃</span>╱<span >┃╰━━╮</span>╱<span >┃╰━╯┃</span>╱<span >┃╰━╯┃</span>╱<span >╰┫</span>╱<br />
                        ╱<span >╰╯</span>╱<span >╰━╯</span>╱<span >╰━━━╯</span>╱╱╱╱╱<span >╰━━━╯</span>╱<span >╰╯</span>╱<span >╰╯</span>╱<span >╰━━━╯</span>╱<span >╰━━━╯</span>╱<span >╰━━━╯</span>╱╱<span >╯</span>╱<br />
                    </div>
                    <br />
                    <div>
                        ╱╱╱<span >╭╮</span>╱<span >╭╮</span>╱<span >╭╮</span>╱<span >╭━━━╮</span>╱<span >╭━━━━╮</span>╱╱╱╱╱<span >╭━━━╮</span>╱╱╱╱╱<span >╭╮</span>╱╱<span >╭╮</span>╱<span >╭━━━╮</span>╱<span >╭━━╮</span>╱<span >╭━━━╮</span>╱<span >╭━━━╮</span>╱<br />
                        ╱╱╱<span >┃┃</span>╱<span >┃┃</span>╱<span >┃┃</span>╱<span >┃╭━╮┃</span>╱<span >┃╭╮╭╮┃</span>╱╱╱╱╱<span >┃╭━╮┃</span>╱╱╱╱╱<span >┃╰╮╭╯┃</span>╱<span >┃╭━╮┃</span>╱<span >╰┫┣╯</span>╱<span >┃╭━╮┃</span>╱<span >┃╭━━╯</span>╱<br />
                        ╱╱╱<span >┃┃</span>╱<span >┃┃</span>╱<span >┃┃</span>╱<span >┃╰━━╮</span>╱<span >╰╯┃┃╰╯</span>╱╱╱╱╱<span >┃┃</span>╱<span >┃┃</span>╱╱╱╱╱<span >╰╮┃┃╭╯</span>╱<span >┃┃</span>╱<span >┃┃</span>╱╱<span >┃┃</span>╱╱<span >┃┃</span>╱<span >╰╯</span>╱<span >┃╰━━╮</span>╱<br />
                        ╱<span >╭╮┃┃</span>╱<span >┃┃</span>╱<span >┃┃</span>╱<span >╰━━╮┃</span>╱╱╱<span >┃┃</span>╱╱╱╱╱╱╱<span >┃╰━╯┃</span>╱╱╱╱╱╱<span >┃╰╯┃</span>╱╱<span >┃┃</span>╱<span >┃┃</span>╱╱<span >┃┃</span>╱╱<span >┃┃</span>╱<span >╭╮</span>╱<span >┃╭━━╯</span>╱<br />
                        ╱<span >┃╰╯┃</span>╱<span >┃╰━╯┃</span>╱<span >┃╰━╯┃</span>╱╱╱<span >┃┃</span>╱╱╱╱╱╱╱<span >┃╭━╮┃</span>╱╱╱╱╱╱<span >╰╮╭╯</span>╱╱<span >┃╰━╯┃</span>╱<span >╭┫┣╮</span>╱<span >┃╰━╯┃</span>╱<span >┃╰━━╮</span>╱<br />
                        ╱<span >╰━━╯</span>╱<span >╰━━━╯</span>╱<span >╰━━━╯</span>╱╱╱<span >╰╯</span>╱╱╱╱╱╱╱<span >╰╯</span>╱<span >╰╯</span>╱╱╱╱╱╱╱<span >╰╯</span>╱╱╱<span >╰━━━╯</span>╱<span >╰━━╯</span>╱<span >╰━━━╯</span>╱<span >╰━━━╯</span>╱
                    </div>
                </>
            )
    }
}

export const DesktopTitle = ({ type = "3d" }) =>
    <div className="title-box">
        <div className="title">
            <ParsedTitle type={type} />
        </div>
    </div>

export const MobileTitle = ({ type = "3d" }) =>
    <div className="title-box">
        <div className="title">
            <ParsedTitle type={type} />
        </div>
    </div>
