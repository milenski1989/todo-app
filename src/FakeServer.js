class FakeServer {
	register(email, name, password, username) {
		localStorage.setItem('account', JSON.stringify({ email, name, password, username }))
	}
	login(email, password) {
		const account = JSON.parse(localStorage.getItem('account'))
		if (account && account.email === email && account.password === password) {
			return 200
		}
		return 400
	}


	createTask(task) {
		const tasks = this.loadTasks()
		tasks.push(task)

		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	loadTasks() {
		let tasks
		if (localStorage.getItem('tasks')) {
			tasks = JSON.parse(localStorage.getItem('tasks'))
		}
		else {
			tasks = []
		}

		return tasks
	}

	deleteTask(index) {
		const tasks = this.loadTasks()
		tasks.splice(index, 1)
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	updateTask(index, task) {
		const tasks = this.loadTasks()
		tasks[index] = task
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	editProfile(name, username, password, email) {
		let profileData = JSON.parse(localStorage.getItem('account'))
		profileData.name = name
		profileData.username = username
		profileData.password = password
		profileData.email = email
		// save in localstorage
		localStorage.setItem('account', JSON.stringify(profileData))

	}
}

const fakeServer = new FakeServer()
export default fakeServer
