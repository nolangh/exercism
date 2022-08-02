/**
Black: 0
Brown: 1
Red: 2
Orange: 3
Yellow: 4
Green: 5
Blue: 6
Violet: 7
Grey: 8
White: 9
*/
const valueMap = new Map<string, number>([
	["BLACK", 0],
	["BROWN", 1],
	["RED", 2],
	["ORANGE", 3],
	["YELLOW", 4],
	["GREEN", 5],
	["BLUE", 6],
	["VIOLET", 7],
	["GREY", 8],
	["WHITE", 9],
]);

export function decodedValue(input: string[]): number {
	const value1: string = input[0].toUpperCase();
	const value2: string = input[1].toUpperCase();
	const valueOne = valueMap.get(value1);
	const valueTwo = valueMap.get(value2);
	const totalValue = `${valueOne}${valueTwo}`;

	return Number(totalValue);
}

//const converter: number = () =>
console.log(decodedValue(["blue", "grey"]));
