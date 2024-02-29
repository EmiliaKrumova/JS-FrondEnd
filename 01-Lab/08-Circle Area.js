function area(input){
    let result;
    let type = typeof(input);
    
    if(type==='number'){
        result = Math.PI*(input**2);
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
        return;
    }
    console.log(result.toFixed(2));
}
area(5)
area('string')