function convertToJSON (firstName, lastName, hairColor){
    let person= {};
    person.name = firstName;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let jsonString = JSON.stringify(person);
    console.log(jsonString);
}
convertToJSON('Peter', 'Smith', 
'Blond' )