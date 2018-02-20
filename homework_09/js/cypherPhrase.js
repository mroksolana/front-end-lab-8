function cypherPhrase(object, message) {
    let newArray = message.split('');
    return getTransformedArray(newArray, function (R) {
        let newObject = Object.keys(object);
        getTransformedArray(newObject, function (newR) {
            if (R===newR) {
                R = object[newR];
            }
        });
        return R;
    }).join('');
}
