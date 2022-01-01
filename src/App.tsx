import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './scss/App.scss'

import { HomePage } from './pages/Home.page'
import { EssayPage } from './pages/Essay.page'
import { Tldr } from './pages/Tldr.page'
import { VideoPage } from './pages/Video.page'
import { AboutMePage } from './pages/AboutMe.page'

export const App: React.FC = (): JSX.Element => (
	<main>
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/read' element={<EssayPage />} />
				<Route path='/tldr' element={<Tldr />} />
				<Route path='/video' element={<VideoPage />} />
				<Route path='/me' element={<AboutMePage />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	</main>
)
