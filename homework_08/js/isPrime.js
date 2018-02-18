function isPrime(myNumber) {
	var myNumber, simpleNumber;
	while (myNumber <= 1) {
		return false;
	}
	for (var i = 2; i * i <= myNumber; i++) {
		if (myNumber % i) {
			return false;
		}

	}
	return true;
}