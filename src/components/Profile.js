import React, { useState } from "react"
import "./Profile.css"
import fakeServer from "../FakeServer"

const account = JSON.parse(localStorage.getItem('account'))

function Profile() {

	const [name, setName] = useState(account.name)
	const [username, setUsername] = useState(account.username)
	const [password, setPassword] = useState(account.password)
	const [email, setEmail] = useState(account.email)


	function changeName(event) {
		//this should be the new name, coming from the input value
		setName(event.target.value)
	}

	function changeUsername(event) {
		//this should be the new name, coming from the input value
		setUsername(event.target.value)
	}

	function changePassword(event) {
		//this should be the new name, coming from the input value
		setPassword(event.target.value)
	}

	function changeEmail(event) {
		//this should be the new name, coming from the input value
		setEmail(event.target.value)
	}

	function changeAccountDetails() {
		//this should change the data in the account
		fakeServer.editProfile(name,
			username,
			password,
			email)
	}

	return <div className="Profile">
		<input type="text" placeholder="name" value={name} onChange={changeName}></input>
		<input type="text" placeholder="username" value={username} onChange={changeUsername}></input>
		<input type="text" placeholder="password" value={password} onChange={changePassword}></input>
		<input type="text" placeholder="email" value={email} onChange={changeEmail}></input>
		<button type="submit" onClick={changeAccountDetails}>Save</button>
	</div>
}

export default Profile
