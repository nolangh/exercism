const food = {
	cookTime: 40,
	prepTime: 2,
};

export const remainingMinutesInOven = (actualMinutesInOven) =>
	food.cookTime - actualMinutesInOven;

export const preparationTimeInMinutes = (numberOfLayers) =>
	numberOfLayers * food.prepTime;

export const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) =>
	numberOfLayers * food.prepTime + actualMinutesInOven;
