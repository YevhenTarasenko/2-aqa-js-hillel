const { UsersController } = require('../../src/controllers/UsersController.js')

const usersController = new UsersController()

test('Get current user profile', async () => {
	await usersController.login()
	const res = await usersController.getUserProfile()
	console.log(res.data)
	expect(res.status).toBe(200)
	expect(res.data.data).toHaveProperty('userId')
	expect(res.data.data.name).toBe('AQATesting')
	expect(res.data.data.lastName).toBe('Yevhen')
})
