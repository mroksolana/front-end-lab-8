function predicateFunction(myNumber) {
	return myNumber > 3;
}


function getFiltresArray(myArray, predicateFunction) {
	let newArray = [];
	forEach(myArray, function (item, index) {
		if (predicateFunction(item)) {
			newArray.push(item);
		}
	});
	return newArray;
}
