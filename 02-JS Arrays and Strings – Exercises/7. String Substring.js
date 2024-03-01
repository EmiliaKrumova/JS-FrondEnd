function find(word,text){
    let textArr = text.split(" ");
    let isFound = false;
    for(let i = 0;i<textArr.length; i++){
        if(textArr[i].toLowerCase()===word.toLowerCase()){
            console.log(word);
            isFound = true;
        }
    }
    if(!isFound){
        console.log(`${word} not found!`);
    }
}
find('javascript','JavaScript is the best programming language')
find('python','JavaScript is the best programming language')