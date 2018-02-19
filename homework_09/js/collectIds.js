function collectIds(movies) {
	let filtred = getFiltredArray(movies, function (R) {
		return (R.rating > 3.0);
	});

	return getTransformedArray(filtred, function (R) {
		return R.id;
	});

}
