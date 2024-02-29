function solve(number,inputArr){
    let array = [];
    for(let i = 0;i<number;i++){
        array.push(inputArr[i])
    }
    array = array.reverse();
    console.log(array.join(" "));
}
solve(3, [10, 20, 30, 40, 50])