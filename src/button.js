// take a string
// default export
// with jsdoc support you get ts suggestions

/**
 * 
 * @param {string} buttonName 
 * @returns {Element} element
 */
const makeButton = (buttonName) => {
	return `Button: ${buttonName}`;
};

export default makeButton;