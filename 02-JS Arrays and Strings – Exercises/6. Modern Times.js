function solve(text){
    let textArray = text.split(" ");
    for(let i = 0; i< textArray.length;i++){
        let currWord = textArray[i];
       
        let pattern = /#[a-zA-Z]+/i;
        if(currWord.match(pattern)){
            let wordToPrint = currWord.replace("#","")
            console.log(wordToPrint);
        }
    }
}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')