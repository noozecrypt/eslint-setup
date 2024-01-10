function checkPositive(number) {
	if (number > 0) {
		return true;
	}
	return false;
}

// function checkPositive(number) {
// 	if (number > 0) {
// 		return true;
// 	}
// 	// Expected to return a value at the end of function - consistent-return - eslint error!
// }


// console.log(checkPositive(10)); // console not allowed - no-console rule - eslint error!
checkPositive(10);
checkEven(3);

function checkEven(number) {
	// if (number % 2 == 0) { // use of '==' - eqeqeq rule - eslint error!
	if (number % 2 === 0) {
		return true;
	}
	return false;
}