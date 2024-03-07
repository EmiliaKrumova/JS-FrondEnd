function convert(jsonString){
    let object = JSON.parse(jsonString);
    for( let key in object){
        console.log(`${key}: ${object[key]}`);
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')