const { AuthController } = require('../../src/controllers/AuthController.mjs')
const { faker } = require('@faker-js/faker')

const authController = new AuthController()
const name = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.exampleEmail()
const password = faker.internet.password({ length: 12 })
const repeatPassword = password

test('Register user', async () => {
	const res = await authController.registerUser(name, lastName, email, password, repeatPassword)
	console.log(res.data)
	expect(res.status).toBe(200);
	expect(res.status).toBe('ok')
})