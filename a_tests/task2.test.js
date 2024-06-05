const axios = require('axios');

describe('Test Posts API', () => {
	test('Create new post', async () => {
		const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
			title: 'foo',
			body: 'bar',
			userId: 1,
		})
		expect(response.status).toBe(201)
		expect(response.statusText).toBe('Created')
		expect(response.data.title).toBe('foo')
		expect(response.data.body).toBe('bar')
		expect(response.data.userId).toBe(1);
		expect(response.data.id).toBeDefined()
	})

	test('Edit post', async () => {
		const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
			id: 1,
			title: 'TEST!!!',
			body: 'new body',
			userId: 1,
		})
		expect(response.status).toBe(200)
		expect(response.data.title).toBe('TEST!!!')
		expect(response.data.body).toBe('new body')
		expect(response.data.userId).toBe(1);
		expect(response.data.id).toBeDefined()
	})

	test('Delete post', async () => {
		const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'DELETE'
		})
		expect(response.status).toBe(200)
	})
})