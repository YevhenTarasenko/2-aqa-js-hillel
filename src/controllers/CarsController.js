const { BaseController } = require('./BaseController')

class CarsController extends BaseController {
	constructor() {
		super()
		this.API_CARS = '/cars'
		this.API_CARS_BRANDS = '/cars/brands'
		this.API_CARS_MODELS_ID = '/cars/models?carBrandId={id}'
		this.API_CARS_ID = '/cars/{id}'
	}

	async getOwnCars() {
		return this.get(this.API_CARS)
	}

	async getAllBrands() {
		return this.get(this.API_CARS_BRANDS)
	}

	async getModelsForBrand(id) {
		return this.get(this.API_CARS_MODELS_ID.replace('{id}', id))
	}

	async createCar(car) {
		return this.post(this.API_CARS, car)
	}

	async deleteCarById(id) {
		return this.delete(this.API_CARS_ID.replace('{id}', id))
	}
}

module.exports.CarsController = CarsController