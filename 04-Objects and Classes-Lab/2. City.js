function createCity(cityObject){
for(let key in cityObject){
    console.log(`${key} -> ${cityObject[key]}`);
}
}
createCity({  name: "Plovdiv",    area: 389,    population: 1162358,    country: "Bulgaria",    postCode: "4000"   }   )