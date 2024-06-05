const axios = require('axios');

describe('Test Users API', () => {
	test('GET user status code is 200', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		expect(response.status).toBe(200);
	});

	test('User has name', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		expect(response.data[0].name).toBe('Leanne Graham')
	});

	test('User name is not empty', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		expect(response.data[0].name).not.toBe('');
	});

	test('User has address', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		expect(response.data[0].address.street).toBeDefined();
		expect(response.data[0].address.suite).toBeDefined();
		expect(response.data[0].address.city).toBeDefined();
		expect(response.data[0].address.zipcode).toBeDefined();
		expect(response.data[0].address.geo.lat).toBeDefined();
		expect(response.data[0].address.geo.lng).toBeDefined();
	});

	test('Check count of objects in response', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const objCount = response.data.length
		expect(objCount).toBe(10);
	})
})