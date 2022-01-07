import React from 'react'

export const ParsedTitle: React.FC<{ titleStyle: string }> = ({
	titleStyle = '3d',
}): JSX.Element => {
	switch (titleStyle) {
		case '3d':
			return (
				<>
					<div>
						<div>
							__<span>/\\\\\</span>_____<span>/\\\</span>_______<span>/\\\\\</span>
							______
							<br /> _<span>\/\\\\\\</span>___<span>\/\\\</span>_____
							<span>/\\\///\\\</span>
							____
							<br /> _<span>\/\\\/\\\</span>__<span>\/\\\</span>___<span>/\\\/</span>
							__
							<span>\///\\\</span>__
							<br /> _<span>\/\\\//\\\</span>_<span>\/\\\</span>__<span>/\\\</span>
							______
							<span>\//\\\</span>_<br /> _<span>\/\\\\//\\\\/\\\</span>_
							<span>\/\\\</span>
							_______<span>\/\\\</span>_<br /> _<span>\/\\\</span>_
							<span>\//\\\/\\\</span>_<span>\//\\\</span>______<span>/\\\</span>__
							<br /> _<span>\/\\\</span>__<span>\//\\\\\\</span>__<span>\///\\\</span>
							__
							<span>/\\\</span>____
							<br /> _<span>\/\\\</span>___<span>\//\\\\\</span>____
							<span>\///\\\\\/</span>
							_____
							<br /> _<span>\///</span>_____<span>\/////</span>_______
							<span>\/////</span>
							_______
						</div>
						<div>
							_____<span>/\\\\\\\\\\\</span>____<span>/\\\</span>________
							<span>/\\\</span>
							__
							<span>/\\\\\\\\\\\\\\\</span>__<span>/\\\</span>______________
							<span>/\\\</span>
							____________________
							<br /> ___<span>/\\\/////////\\\</span>_<span>\/\\\</span>_______
							<span>\/\\\</span>_<span>\/\\\///////////</span>__<span>\/\\\</span>
							_____________<span>\/\\\</span>____________________
							<br /> __<span>\//\\\</span>______<span>\///</span>__<span>\/\\\</span>
							_______
							<span>\/\\\</span>_<span>\/\\\</span>_____________<span>\/\\\</span>
							_____________<span>\/\\\</span>____________________
							<br /> ___<span>\////\\\</span>_________<span>\/\\\\\\\\\\\\\\\</span>_
							<span>\/\\\\\\\\\\\</span>_____<span>\/\\\</span>_____________
							<span>\/\\\</span>
							____________________
							<br /> ______<span>\////\\\</span>______<span>\/\\\/////////\\\</span>_
							<span>\/\\\///////</span>______<span>\/\\\</span>_____________
							<span>\/\\\</span>
							____________________
							<br /> _________<span>\////\\\</span>___<span>\/\\\</span>_______
							<span>\/\\\</span>_<span>\/\\\</span>_____________<span>\/\\\</span>
							_____________<span>\/\\\</span>______________<span>/\\\\</span>_<br />{' '}
							__
							<span>/\\\</span>______<span>\//\\\</span>__<span>\/\\\</span>_______
							<span>\/\\\</span>_<span>\/\\\</span>_____________<span>\/\\\</span>
							_____________<span>\/\\\</span>_____________<span>\///\\</span>_<br /> _
							<span>\///\\\\\\\\\\\/</span>___<span>\/\\\</span>_______
							<span>\/\\\</span>_<span>\/\\\\\\\\\\\\\\\</span>_
							<span>\/\\\\\\\\\\\\\\\</span>_<span>\/\\\\\\\\\\\\\\\</span>__
							<span>/\\/</span>__
							<br /> ___<span>\///////////</span>_____<span>\///</span>________
							<span>\///</span>__<span>\///////////////</span>__
							<span>\///////////////</span>
							__<span>\///////////////</span>__<span>\//</span>____
						</div>
					</div>
					<div>
						<div>
							______<span>/\\\\\\\\\\\</span>__<span>/\\\</span>________
							<span>/\\\</span>
							_____
							<span>/\\\\\\\\\\\</span>____<span>/\\\\\\\\\\\\\\\</span>_<br /> _____
							<span>\/////\\\///</span>__<span>\/\\\</span>_______<span>\/\\\</span>
							___
							<span>/\\\/////////\\\</span>_<span>\///////\\\/////</span>__
							<br /> _________<span>\/\\\</span>_____<span>\/\\\</span>_______
							<span>\/\\\</span>__<span>\//\\\</span>______<span>\///</span>________
							<span>\/\\\</span>_______
							<br /> _________<span>\/\\\</span>_____<span>\/\\\</span>_______
							<span>\/\\\</span>___<span>\////\\\</span>_______________
							<span>\/\\\</span>
							_______
							<br /> _________<span>\/\\\</span>_____<span>\/\\\</span>_______
							<span>\/\\\</span>______<span>\////\\\</span>____________
							<span>\/\\\</span>
							_______
							<br /> _________<span>\/\\\</span>_____<span>\/\\\</span>_______
							<span>\/\\\</span>_________<span>\////\\\</span>_________
							<span>\/\\\</span>
							_______
							<br /> __<span>/\\\</span>___<span>\/\\\</span>_____<span>\//\\\</span>
							______
							<span>/\\\</span>___<span>/\\\</span>______<span>\//\\\</span>________
							<span>\/\\\</span>_______
							<br /> _<span>\//\\\\\\\\\</span>_______<span>\///\\\\\\\\\/</span>___
							<span>\///\\\\\\\\\\\/</span>_________<span>\/\\\</span>_______
							<br /> __<span>\/////////</span>__________<span>\/////////</span>_______
							<span>\///////////</span>___________<span>\///</span>________
						</div>
						<div>
							_____<span>/\\\\\\\\\</span>____
							<br /> ___<span>/\\\\\\\\\\\\\</span>__
							<br /> __<span>/\\\/////////\\\</span>_<br /> _<span>\/\\\</span>_______
							<span>\/\\\</span>_<br /> _<span>\/\\\\\\\\\\\\\\\</span>_<br /> _
							<span>\/\\\/////////\\\</span>_<br /> _<span>\/\\\</span>_______
							<span>\/\\\</span>_<br /> _<span>\/\\\</span>_______<span>\/\\\</span>_
							<br /> _<span>\///</span>________<span>\///</span>__
						</div>
						<div>
							__<span>/\\\</span>________<span>/\\\</span>_______<span>/\\\\\</span>
							_______
							<span>/\\\\\\\\\\\</span>________<span>/\\\\\\\\\</span>__
							<span>/\\\\\\\\\\\\\\\</span>_<br /> _<span>\/\\\</span>_______
							<span>\/\\\</span>_____<span>/\\\///\\\</span>____
							<span>\/////\\\///</span>
							______<span>/\\\////////</span>__<span>\/\\\///////////</span>__
							<br /> _<span>\//\\\</span>______<span>/\\\</span>____<span>/\\\/</span>
							__
							<span>\///\\\</span>______<span>\/\\\</span>_______<span>/\\\/</span>
							___________
							<span>\/\\\</span>_____________
							<br /> __<span>\//\\\</span>____<span>/\\\</span>____<span>/\\\</span>
							______
							<span>\//\\\</span>_____<span>\/\\\</span>______<span>/\\\</span>
							_____________
							<span>\/\\\\\\\\\\\</span>_____
							<br /> ___<span>\//\\\</span>__<span>/\\\</span>____<span>\/\\\</span>
							_______
							<span>\/\\\</span>_____<span>\/\\\</span>_____<span>\/\\\</span>
							_____________
							<span>\/\\\///////</span>______
							<br /> ____<span>\//\\\/\\\</span>_____<span>\//\\\</span>______
							<span>/\\\</span>______<span>\/\\\</span>_____<span>\//\\\</span>
							____________
							<span>\/\\\</span>_____________
							<br /> _____<span>\//\\\\\</span>_______<span>\///\\\</span>__
							<span>/\\\</span>
							________<span>\/\\\</span>______<span>\///\\\</span>__________
							<span>\/\\\</span>
							_____________
							<br /> ______<span>\//\\\</span>__________<span>\///\\\\\/</span>______
							<span>/\\\\\\\\\\\</span>____<span>\////\\\\\\\\\</span>_
							<span>\/\\\\\\\\\\\\\\\</span>_<br /> _______<span>\///</span>
							_____________
							<span>\/////</span>_______<span>\///////////</span>________
							<span>\/////////</span>__<span>\///////////////</span>__
						</div>
					</div>
				</>
			)
		case 'grid':
			return (
				<>
					<div>
						╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋┏┓╋╋┏┓╋╋╋╋╋
						<br />
						╋┏━┓╋╋┏━━┓╋╋╋╋┏━━┓╋┃┗━┓╋┏━━┓╋┃┃╋╋┃┃╋╋╋╋╋
						<br />
						╋┃┏┓┓╋┃┏┓┃╋╋╋╋┃━━┫╋┃┏┓┃╋┃┃━┫╋┃┃╋╋┃┃╋╋╋╋╋
						<br />
						╋┃┃┃┃╋┃┗┛┃╋╋╋╋┣━━┃╋┃┃┃┃╋┃┃━┫╋┃┗┓╋┃┗┓╋╋╋╋
						<br />
						╋┗┛┗┛╋┗━━┛╋╋╋╋┗━━┛╋┗┛┗┛╋┗━━┛╋┗━┛╋┗━┛╋┏┓╋
						<br />
						╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┗┫╋
						<br />
					</div>
					<br />
					<div>
						╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋
						<br />
						╋╋┗┛╋┏┓┏┓╋┏━━┓╋┏┛┗┓╋╋╋╋┏━━┓╋╋╋╋┏┓┏┓╋┏━━┓╋┗┛╋┏━━┓╋┏━━┓╋
						<br />
						╋╋┏┓╋┃┃┃┃╋┃━━┫╋┗┓┏┛╋╋╋╋┃┏┓┃╋╋╋╋┃┗┛┃╋┃┏┓┃╋┏┓╋┃┏━┛╋┃┃━┫╋
						<br />
						╋╋┃┃╋┃┗┛┃╋┣━━┃╋╋┃┗┓╋╋╋╋┃┏┓┃╋╋╋╋┗┓┏┛╋┃┗┛┃╋┃┃╋┃┗━┓╋┃┃━┫╋
						<br />
						╋┏┛┃╋┗━━┛╋┗━━┛╋╋┗━┛╋╋╋╋┗┛┗┛╋╋╋╋╋┗┛╋╋┗━━┛╋┗┛╋┗━━┛╋┗━━┛╋
						<br />
						╋┗━┛╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋
					</div>
				</>
			)

		case 'pallet':
			return (
				<>
					<div>
						─╔═╗─╔╗─╔═══╗─────╔═══╗─╔╗─╔╗─╔═══╗─╔╗────╔╗────╔╗─
						<br />
						─║║╚╗║║─║╔═╗║─────║╔═╗║─║║─║║─║╔══╝─║║────║║────║║─
						<br />
						─║╔╗╚╝║─║║─║║─────║╚══╗─║╚═╝║─║╚══╗─║║────║║────╚╝─
						<br />
						─║║╚╗║║─║║─║║─────╚══╗║─║╔═╗║─║╔══╝─║║─╔╗─║║─╔╗─╔╗─
						<br />
						─║║─║║║─║╚═╝║─────║╚═╝║─║║─║║─║╚══╗─║╚═╝║─║╚═╝║─╚╣─
						<br />
						─╚╝─╚═╝─╚═══╝─────╚═══╝─╚╝─╚╝─╚═══╝─╚═══╝─╚═══╝──╝─
						<br />
					</div>
					<br />
					<div>
						───╔╗─╔╗─╔╗─╔═══╗─╔════╗─────╔═══╗─────╔╗──╔╗─╔═══╗─╔══╗─╔═══╗─╔═══╗─
						<br />
						───║║─║║─║║─║╔═╗║─║╔╗╔╗║─────║╔═╗║─────║╚╗╔╝║─║╔═╗║─╚╣╠╝─║╔═╗║─║╔══╝─
						<br />
						───║║─║║─║║─║╚══╗─╚╝║║╚╝─────║║─║║─────╚╗║║╔╝─║║─║║──║║──║║─╚╝─║╚══╗─
						<br />
						─╔╗║║─║║─║║─╚══╗║───║║───────║╚═╝║──────║╚╝║──║║─║║──║║──║║─╔╗─║╔══╝─
						<br />
						─║╚╝║─║╚═╝║─║╚═╝║───║║───────║╔═╗║──────╚╗╔╝──║╚═╝║─╔╣╠╗─║╚═╝║─║╚══╗─
						<br />
						─╚══╝─╚═══╝─╚═══╝───╚╝───────╚╝─╚╝───────╚╝───╚═══╝─╚══╝─╚═══╝─╚═══╝─
					</div>
				</>
			)
		case 'slick':
			return (
				<>
					<div>
						╱<span>╭━╮</span>╱<span>╭╮</span>╱<span>╭━━━╮</span>╱╱╱╱╱<span>╭━━━╮</span>╱
						<span>╭╮</span>╱<span>╭╮</span>╱<span>╭━━━╮</span>╱<span>╭╮</span>╱╱╱╱
						<span>╭╮</span>╱╱╱╱╱╱╱
						<br />╱<span>┃┃╰╮┃┃</span>╱<span>┃╭━╮┃</span>╱╱╱╱╱<span>┃╭━╮┃</span>╱
						<span>┃┃</span>╱<span>┃┃</span>╱<span>┃╭━━╯</span>╱<span>┃┃</span>╱╱╱╱
						<span>┃┃</span>╱╱╱╱╱╱╱
						<br />╱<span>┃╭╮╰╯┃</span>╱<span>┃┃</span>╱<span>┃┃</span>╱╱╱╱╱
						<span>┃╰━━╮</span>╱<span>┃╰━╯┃</span>╱<span>┃╰━━╮</span>╱<span>┃┃</span>╱╱╱╱
						<span>┃┃</span>╱╱╱╱╱╱╱
						<br />╱<span>┃┃╰╮┃┃</span>╱<span>┃┃</span>╱<span>┃┃</span>╱╱╱╱╱
						<span>╰━━╮┃</span>╱<span>┃╭━╮┃</span>╱<span>┃╭━━╯</span>╱<span>┃┃</span>╱
						<span>╭╮</span>╱<span>┃┃</span>╱<span>╭╮</span>╱<span>╭╮</span>╱<br />╱
						<span>┃┃</span>╱<span>┃┃┃</span>╱<span>┃╰━╯┃</span>╱╱╱╱╱<span>┃╰━╯┃</span>╱
						<span>┃┃</span>╱<span>┃┃</span>╱<span>┃╰━━╮</span>╱<span>┃╰━╯┃</span>╱
						<span>┃╰━╯┃</span>╱<span>╰┫</span>╱<br />╱<span>╰╯</span>╱<span>╰━╯</span>╱
						<span>╰━━━╯</span>╱╱╱╱╱<span>╰━━━╯</span>╱<span>╰╯</span>╱<span>╰╯</span>╱
						<span>╰━━━╯</span>╱<span>╰━━━╯</span>╱<span>╰━━━╯</span>╱╱<span>╯</span>╱
						<br />
					</div>
					<br />
					<div>
						╱╱╱<span>╭╮</span>╱<span>╭╮</span>╱<span>╭╮</span>╱<span>╭━━━╮</span>╱
						<span>╭━━━━╮</span>╱╱╱╱╱<span>╭━━━╮</span>╱╱╱╱╱<span>╭╮</span>╱╱
						<span>╭╮</span>╱<span>╭━━━╮</span>╱<span>╭━━╮</span>╱<span>╭━━━╮</span>╱
						<span>╭━━━╮</span>╱<br />
						╱╱╱<span>┃┃</span>╱<span>┃┃</span>╱<span>┃┃</span>╱<span>┃╭━╮┃</span>╱
						<span>┃╭╮╭╮┃</span>╱╱╱╱╱<span>┃╭━╮┃</span>╱╱╱╱╱<span>┃╰╮╭╯┃</span>╱
						<span>┃╭━╮┃</span>╱<span>╰┫┣╯</span>╱<span>┃╭━╮┃</span>╱<span>┃╭━━╯</span>╱
						<br />
						╱╱╱<span>┃┃</span>╱<span>┃┃</span>╱<span>┃┃</span>╱<span>┃╰━━╮</span>╱
						<span>╰╯┃┃╰╯</span>╱╱╱╱╱<span>┃┃</span>╱<span>┃┃</span>╱╱╱╱╱
						<span>╰╮┃┃╭╯</span>╱<span>┃┃</span>╱<span>┃┃</span>╱╱<span>┃┃</span>╱╱
						<span>┃┃</span>╱<span>╰╯</span>╱<span>┃╰━━╮</span>╱<br />╱<span>╭╮┃┃</span>╱
						<span>┃┃</span>╱<span>┃┃</span>╱<span>╰━━╮┃</span>╱╱╱<span>┃┃</span>╱╱╱╱╱╱╱
						<span>┃╰━╯┃</span>╱╱╱╱╱╱<span>┃╰╯┃</span>╱╱<span>┃┃</span>╱<span>┃┃</span>╱╱
						<span>┃┃</span>╱╱<span>┃┃</span>╱<span>╭╮</span>╱<span>┃╭━━╯</span>╱<br />╱
						<span>┃╰╯┃</span>╱<span>┃╰━╯┃</span>╱<span>┃╰━╯┃</span>╱╱╱<span>┃┃</span>
						╱╱╱╱╱╱╱<span>┃╭━╮┃</span>╱╱╱╱╱╱<span>╰╮╭╯</span>╱╱<span>┃╰━╯┃</span>╱
						<span>╭┫┣╮</span>╱<span>┃╰━╯┃</span>╱<span>┃╰━━╮</span>╱<br />╱
						<span>╰━━╯</span>╱<span>╰━━━╯</span>╱<span>╰━━━╯</span>╱╱╱<span>╰╯</span>
						╱╱╱╱╱╱╱<span>╰╯</span>╱<span>╰╯</span>╱╱╱╱╱╱╱<span>╰╯</span>╱╱╱
						<span>╰━━━╯</span>╱<span>╰━━╯</span>╱<span>╰━━━╯</span>╱<span>╰━━━╯</span>╱
					</div>
				</>
			)
		default:
			return <></>
	}
}

export const Title: React.FC<{ titleStyle: string }> = ({ titleStyle = '3d' }) => (
	<div className='title'>
		<ParsedTitle titleStyle={titleStyle} />
	</div>
)
