function cats(input){
    let catsArr = [];
    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        Meow(){console.log(`${this.name}, age ${this.age} says Meow`); }

    }
    for(let line of input){
        let [catName, catAge] = line.split(" ")
        let currCat = new Cat(catName,catAge);
        catsArr.push(currCat);
    }
    for(let cat of catsArr){
       cat.Meow(); ;
    }
}
cats(['Mellow 2', 'Tom 5'])