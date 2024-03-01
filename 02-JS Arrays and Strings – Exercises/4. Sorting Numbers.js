function sorting(arr){
    let array = arr.sort((a,b)=>a-b);
    let result=[];
    while(array.length>0){
       let currNum = array.shift()
        result.push(currNum);
        let lastNum = array.pop();
        result.push(lastNum);
    }
    return result;
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56] )