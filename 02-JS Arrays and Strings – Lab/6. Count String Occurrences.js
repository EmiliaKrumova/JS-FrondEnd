function solve(text,searchedWord){
    let count = 0;
    let words = text.split(" ");
    for(let word of words){
        if(word===searchedWord){
            count++;
        }
    }
    console.log(count);
}
solve('This is a word and it also is a sentence','is');
