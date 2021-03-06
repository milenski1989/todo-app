import React from 'react'
import { Link } from 'react-router-dom'

import "./Navigation.css"

function Navigation() {
	return (
		<nav className="Navigation">
			<Link to={"/profile"}>Profile</Link>
			<Link to={"/"}>Tasks</Link>
			<Link to={"/pictures"}>Pictures</Link>
		</nav>
	)
}

export default Navigation
