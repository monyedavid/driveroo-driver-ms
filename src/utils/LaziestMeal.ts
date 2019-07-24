const countIngridients = (meal: Object) => {
	let marker: number = 1;
	let ingridentCount: number = 1;
	while (marker > 0) {
		if (meal[`strIngredient${ingridentCount}`]) {
			ingridentCount++;
		} else {
			marker = 0;
		}
	}
	return ingridentCount - 1;
};

type ArrayData = {
	ingridentCount: number;
	i: number;
};

type array = Array<ArrayData>;

export const LaziestMeal = async (meals: Array<Object>) => {
	const array: array = [];
	// filter array for empty resposnes
	meals.forEach((meal, i) => {
		const ingridentCount = countIngridients(meal);
		array.push({ ingridentCount, i });
	});

	// console.log(array, "ingrident count + index");

	const laziestMealWinner = await array.reduce((minimum, obj) => {
		if (!minimum) {
			return (minimum = obj);
		}

		if (minimum) {
			// object ingridentCOunt < minmum? update minimum
			if (obj.ingridentCount < minimum.ingridentCount) {
				return (minimum = obj);
			} else {
				return minimum;
			}
			// obeject ingridentCount > minimum return minimum
		}

		return minimum;
	}, null);

	// console.log(laziestMealWinner, "Winner");

	const laziestIndex = laziestMealWinner.i;
	return {
		meal: meals[laziestIndex],
		ingridentCount: laziestMealWinner.ingridentCount
	};
};
