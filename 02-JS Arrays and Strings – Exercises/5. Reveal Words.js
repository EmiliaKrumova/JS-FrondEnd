function replace(words, text){
    let wordsArr = words.split(", ");
    let textArr = text.split(" ");
    for(let i = 0; i< wordsArr.length; i++){

        currWord = wordsArr[i];
        let search = "*".repeat(currWord.length);

        for(let j = 0; j<textArr.length;j++){
            if(textArr[j]==search){
               textArr[j]=currWord;
            }

        }
             
       
    }
    console.log(textArr.join(" "));
}
replace('great, learning','softuni is ***** place for ******** new programming languages')