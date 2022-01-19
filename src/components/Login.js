import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import visiblePage from '../enums/visiblePage'
import fakeServer from '../FakeServer'
import './Login.css'

function Login() {
	const [page, setPage] = useState(visiblePage.login)

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	let navigate = useNavigate()

	function onChangeEmail(event) {
		setEmail(event.target.value)
	}
	function onChangeName(event) {
		setName(event.target.value)
	}
	function onChangePassword(event) {
		setPassword(event.target.value)
	}
	function onChangeUsername(event) {
		setUsername(event.target.value)
	}
	function register() {
		fakeServer.register(email, name, password, username)
		navigate('/', { replace: true })
		localStorage.setItem('isLoggedIn', JSON.stringify(true))
	}
	function login() {
		const response = fakeServer.login(email, password)
		if (response === 200) {
			navigate('/', { replace: true })
			localStorage.setItem('isLoggedIn', JSON.stringify(true))
			// localStorage.removeItem('isLoggedIn')
		} else {
			alert('Wrong email or password')
		}
	}



	return <div>

		{/*switch between Login and Register pages*/}
		<div className="page-switcher">
			<div className="page-switcher-item"> <button type="submit" onClick={() => setPage(visiblePage.login)}>Login</button></div>
			<div className="page-switcher-item"> <button type="submit" onClick={() => setPage(visiblePage.register)}>Register</button></div>
		</div>

		<div className="login-container">

			{/*Login form*/}
			{
				page === visiblePage.login ? <div className="login-form form">
					<div className="login-item">
						<h1>Login Form</h1>
						<input placeholder="email@email.com" type="email" value={email} onChange={onChangeEmail} />
					</div>
					<div className="login-item">
						<input placeholder="Password" type="password" value={password} onChange={onChangePassword} />
					</div>
					<div className="login-btn btn"> <button onClick={login}>Login</button></div>

					{/*Register Form*/}
				</div> : <div className="register-form form">
					<div
						className="register-item">
						<h1>Register Form</h1>
						<input type="text" placeholder="Full Name" value={name} onChange={onChangeName} />
					</div>
					<div className="register-item">
						<input type="text" placeholder="Username" value={username} onChange={onChangeUsername} />
					</div>
					<div className="register-item">
						<input type="email" placeholder="email@email.com" value={email} onChange={onChangeEmail} />
					</div>
					<div className="register-item">
						<input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
					</div>

					<div className="register-btn btn">
						<button type="submit" onClick={register} >Register</button>
					</div>
				</div>
			}
		</div>

	</div>


}

export default Login
