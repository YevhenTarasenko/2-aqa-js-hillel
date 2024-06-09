const { AuthController } = require('../../src/controllers/AuthController.js')

const authController = new AuthController()

describe('Test auth API', () => {

	test('Register user', async () => {
		const res = await authController.registerUser()
		expect(res.status).toBe(201)
		expect(res.data.status).toBe('ok')
		expect(res.data.data).toHaveProperty('userId')
		userId = res.data.data.userId
	})

})