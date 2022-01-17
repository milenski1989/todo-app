import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Tasks from "./components/Tasks"
import Profile from "./components/Profile"
import Login from "./components/Login"
import { useEffect, useState } from "react"

function App() {
	let navigate = useNavigate()
	useEffect(() => {
		navigate("login", { replace: true })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="profile" element={<Profile />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</>
	)
}

export default App