//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colors = new Map([
	["black", 0],
	["brown", 1],
	["red", 2],
	["orange", 3],
	["yellow", 4],
	["green", 5],
	["blue", 6],
	["violet", 7],
	["grey", 8],
	["white", 9],
]);

export const colorCode = (input) => colors.get(input);

// I didn't use this array, Just needed it for a test
export const COLORS = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
];
