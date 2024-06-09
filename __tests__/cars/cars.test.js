const { CarsController } = require('../../src/controllers/CarsController')
const { faker } = require('@faker-js/faker')

const carsController = new CarsController()

describe('Check cars API', () => {
	beforeAll(async () => {
		await carsController.login()
	})

	afterAll(async () => {
		const carsResponse = await carsController.getOwnCars()
		const carIds = carsResponse.data.data.map((c) => c.id)
		for (const carId of carIds) {
			await carsController.deleteCarById(carId)
		}
	})

	let brands;
	let brandModels = {}

	test('Get all car brands', async () => {
		const carsResponse = await carsController.getAllBrands()
		expect(carsResponse.status).toBe(200)
		expect(carsResponse.data.status).toBe('ok')

		// Add all car brands to the "brands" variable
		brands = carsResponse.data.data
	})

	test('Get all models for all brands', async () => {
		for (const brand of brands) {
			const response = await carsController.getModelsForBrand(brand.id)
			expect(response.status).toBe(200)
			expect(response.data.status).toBe('ok')

			brandModels[brand.title] = response.data.data
		}
	})

	test('Create cars for all brands and models', async () => {
		for (const brand of brands) {
			const models = brandModels[brand.title];
			const mileage = faker.number.int({ min: 1, max: 999999 })
			for (const model of models) {
				const car = {
					carBrandId: brand.id,
					carModelId: model.id,
					mileage: mileage
				};
				const response = await carsController.createCar(car);
				expect(response.status).toBe(201);
				expect(response.data.status).toBe('ok');
			}
		}
	});

	test('ERROR - Create cars for all brands and models with invalid mileage', async () => {
		for (const brand of brands) {
			const models = brandModels[brand.title];
			const mileage = faker.number.int({ min: -100, max: 0 })
			for (const model of models) {
				const car = {
					carBrandId: brand.id,
					carModelId: model.id,
					mileage: mileage
				};
				const response = await carsController.createCar(car);
				expect(response.status).toBe(400);
				expect(response.data.status).toBe('error');
			}
		}
	});

	test('ERROR - Create cars for all brands and models with invalid car data', async () => {
		for (const brand of brands) {
			const models = brandModels[brand.title];
			const mileage = faker.number.int({ min: -100, max: 0 })
			for (const model of models) {
				const car = {
					carBrandId: 20,
					carModelId: 20,
					mileage: mileage
				};
				const response = await carsController.createCar(car);
				expect(response.status).toBe(400);
				expect(response.data.status).toBe('error');
			}
		}
	});

	test('ERROR - Create cars for all brands and models - car data is empty', async () => {
		for (const brand of brands) {
			const models = brandModels[brand.title];
			const mileage = faker.number.int({ min: -100, max: 0 })
			for (const model of models) {
				const car = {
					carBrandId: brand.id,
					carModelId: model.id,
					mileage: mileage
				};
				const response = await carsController.createCar();
				expect(response.status).toBe(400);
				expect(response.data.message).toBe('Car brand id is required');
			}
		}
	});

	test('User can get all his own cars', async () => {
		const carsResponse = await carsController.getOwnCars()
		expect(carsResponse.status).toBe(200)

		carsResponse.data.data.forEach(car => {
			expect(car).toHaveProperty('id');
			expect(car).toHaveProperty('carBrandId');
			expect(car).toHaveProperty('carModelId');
			expect(car).toHaveProperty('initialMileage');
			expect(car).toHaveProperty('updatedMileageAt');
			expect(car).toHaveProperty('carCreatedAt');
			expect(car).toHaveProperty('mileage');
			expect(car).toHaveProperty('brand');
			expect(car).toHaveProperty('model');
			expect(car).toHaveProperty('logo');
		});
	})

})