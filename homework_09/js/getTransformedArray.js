function increment(myNumber) {
	return myNumber + 1;
}


function getTransformedArray(Array, increment) {
	let newArray = [];
	forEach(myArray, function (item, index) {
		newArray[index] = increment(item);
	});
	return newArray;
}
