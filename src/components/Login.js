import React, { useState } from "react"
import { useNavigate } from "react-router"
import visiblePage from "../enums/visiblePage"
import "./Login.css"

function Login() {
	const [page, setPage] = useState(visiblePage.login)

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	let navigate = useNavigate()
	
	function onChangeEmail(event){
		setEmail(event.target.value)
	}
	function onChangeName(event){
		setName(event.target.value)
	}
	function onChangePassword(event){
		setPassword(event.target.value)
	}
	function onChangeUsername(event){
		setUsername(event.target.value)
	}
	function register(){
		navigate("/", { replace: true })
	}
	function login(){
		navigate("/", { replace: true })
	}


	return <div className="LoginContainer">
		<div className="page-switcher">
			<div onClick={() => setPage(visiblePage.login)}>Login</div>
			<div onClick={() => setPage(visiblePage.register)}>Register</div>
		</div>
		{page === visiblePage.login ? <div className="LoginForm">
			<div>
				<div>Email</div>
				<input placeholder="pesho@gmail.com"type="email" value={email} onChange={onChangeEmail}/>
			</div>
			<div>
				<div>Password</div>
				<input type="password" value={password} onChange={onChangePassword}/>
			</div>
			<div onClick={login} class="btn">Login</div>
		</div> : <div className="LoginForm">
			<div>
				<div>Full name</div>
				<input type="text" value={name} onChange={onChangeName}/>
			</div>
			<div>
				<div>Username</div>
				<input type="text" value={username} onChange={onChangeUsername}/>
			</div>
			<div>
				<div>Email</div>
				<input type="email" value={email} onChange={onChangeEmail}/>
			</div>
			<div>
				<div>Password</div>
				<input type="password" value={password} onChange={onChangePassword}/>
			</div>
			<div onClick={register} class="btn">Register</div>
		</div>}
	</div>
}

export default Login
