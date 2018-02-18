function getClosestToZero() {
	var theClosest = arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		if (Math.abs(arguments[i]) < Math.abs(theClosest)) {
			theClosest = arguments[i];
		}
	}
	return theClosest;
}