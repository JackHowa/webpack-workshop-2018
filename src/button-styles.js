const red = "color: red;";
const blue = "color: blue;";

const makeColorStyle = (color) => `color: ${color};`;

// preferred way to write modules via webpack
// good way to declare all of the exports at the bottom

export { red, blue, makeColorStyle}