const { BaseController } = require('./BaseController');
// const { faker } = require('@faker-js/faker')

// Хотів реєстрацію та логін робити з faker , але не вийшло =(
// const name = faker.person.firstName()
// const lastName = faker.person.lastName()
// const email = faker.internet.exampleEmail()
// const password = faker.internet.password({ length: 12 })
// const repeatPassword = password

class AuthController extends BaseController {
	constructor() {
		super()
		this.API_AUTH_SIGNUP = '/auth/signup';
		this.API_AUTH_SIGNIN = '/auth/signin';
		this.API_USERS = '/users'
	};

	async registerUser() {
		return this._axios.post(this.API_AUTH_SIGNUP, {
			name: "AQATestingTwo",
			lastName: "YevhenTwo",
			email: "aqatestingyevhentwo@gmail.com",
			password: "Qwerty12345%",
			repeatPassword: "Qwerty12345%"
		})
	};

	async deleteUser() {
		return this._axios.delete(this.API_USERS)
	}

}

module.exports.AuthController = AuthController