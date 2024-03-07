function adress(input){
    let adresBook = {};
    for(let line of input){
        let [name, adress] = line.split(":")
        adresBook[name] = adress;
    }
  
    let sorted1 = Object.keys(adresBook);
    sorted1.sort((a,b)=>a.localeCompare(b))  
    for(let key of sorted1){
        console.log(`${key} -> ${adresBook[key]}`);
    }

     // let sorted = Object.entries(adresBook);// get kv pairs(tuples)-> keys at index 0, values at index 1

   // sorted.sort((a,b) => a[0].localeCompare(b[0])); // sorting by keys alphabetically 
    // for(let tuple of sorted){
    //     console.log(`${tuple[0]} -> ${adresBook[tuple[0]]}`);
    // }
}
adress(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave','Bob:Redwing Ave','George:Mesta Crossing','Ted:Gateway Way','Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])