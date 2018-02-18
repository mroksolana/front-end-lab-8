function isBigger(firstNumber, secondNumber) {
	return firstNumber > secondNumber;
}

function isSmaller() {
	function isBigger(firstNumber, secondNumber) {
		return !(firstNumber > secondNumber);
	}
}