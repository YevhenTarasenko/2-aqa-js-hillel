const axios = require('axios')

class AuthController {
	constructor() {
		this.axios = axios.create({
			baseURL: 'https://qauto.forstudy.space/api',
			validateStatus: () => true,
		})
		this.API_AUTH_SIGNUP = '/auth/signup'
	}

	async registerUser(name, lastName, email, password, repeatPassword) {
		return this.axios.post(this.API_AUTH_SIGNUP, { name, lastName, email, password, repeatPassword })
	}

}

module.exports.AuthController = AuthController