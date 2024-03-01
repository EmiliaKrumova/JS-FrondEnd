function rotation(arr,count){
    let array = arr;
    for(let i= 0;i<count;i++){
    let curElement = array.shift();
        array.push(curElement)
    }
    console.log(array.join(" "));
}
rotation([51, 47, 32, 61, 21], 2)