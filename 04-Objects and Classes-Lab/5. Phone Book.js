function phonebook(input){
    let phonebook = {};
    for(let line of input){
        let [name, phoneNuber] = line.split(" ")
        phonebook[name] = phoneNuber;
    }
    for(let key in phonebook){
        console.log(`${[key]} -> ${phonebook[key]}`);
    }

}
phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)