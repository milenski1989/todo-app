import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import Tasks from './components/Tasks'
import Profile from './components/Profile'
import Login from './components/Login'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Task from './components/Task'

function App() {
	let navigate = useNavigate()
	let location = useLocation()
	useEffect(() => {
		// if not logged in
		if (!localStorage.getItem('isLoggedIn')) {
			navigate('login', { replace: true })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	console.log(location)

	return (
		<>
			{location.pathname !== '/login' && <Navigation />}
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="profile" element={<Profile />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</>
	)
}

export default App