class FakeServer{
	register(email,name,password,username){
		localStorage.setItem('account',JSON.stringify({email,name,password,username}))
	}
	login(email,password){
		const account = JSON.parse(localStorage.getItem('account'))
		console.log(account, email, password )
		if(account && account.email === email && account.password === password){
			return 200
		}
		return 400
	}
}

const fakeServer = new FakeServer()
export default fakeServer
