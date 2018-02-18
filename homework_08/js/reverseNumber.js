function reverseNumber(myNumber) {
	var action = parseInt(myNumber.toString().split("").reverse().join(""));
	return Math.sign(action);
}