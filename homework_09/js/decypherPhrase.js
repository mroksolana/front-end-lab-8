function decypherPhrase(object, message) {
    let newObject = {};
    for (let key in object) {
            newObject[object[key]] = key;
    }
    return cypherPhrase(newObject, message);
};
