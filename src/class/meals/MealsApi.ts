import * as rp from "request-promise";
import * as clean from "clean-deep";
import { LaziestMeal } from "../../utils/LaziestMeal";

const theMealsDbApi = "https://www.themealdb.com";

export class MealsApi {
	meals: Array<Object>;
	options: {
		uri: string;
		json: boolean;
	};
	constructor() {
		this.meals = [];
		this.options = {
			uri: "",
			json: true
		};
	}

	private async LazyMealsRequest(id: number) {
		const mealAtId = `${theMealsDbApi}/api/json/v1/1/lookup.php?i=${id}`;
		this.options.uri = mealAtId;
		let mealResposne: any;
		// Make Axios Request
		try {
			const response = await rp(this.options);
			// check if response is null here
			if (response.meals === null) {
				return;
			}
			mealResposne = response;
		} catch (error) {
			console.log(error);
		}
		// remove all empty | null values
		mealResposne = clean(mealResposne.meals[0]);
		// return clean object
		return this.meals.push(mealResposne);
	}

	public async LazyMeals(containsId: Array<number>) {
		// use promises.all
		const RequestPromises = [];
		// for each id in contains ID
		// Filter reccuring ids from the Array
		var NewContainerId = containsId.filter((item, index) => {
			return containsId.indexOf(item) >= index;
		});

		NewContainerId.forEach(async id => {
			// get meal detail
			RequestPromises.push(this.LazyMealsRequest(id));
		});

		await Promise.all(RequestPromises);
		return await LaziestMeal(this.meals);
	}
}
