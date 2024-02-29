function substring(text,start,count){
    let result = '';
    for(let i=start; i<(start+count); i++){
        result+=text[i];

    }
    console.log(result);

}
substring('ASentence', 1, 8)