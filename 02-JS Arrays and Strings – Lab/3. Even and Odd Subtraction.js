function solve(arr) {
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0;i<arr.length;i++){
        let currNum = arr[i];
        if(currNum%2==0){
            evenSum+=currNum;
        }else{
            oddSum+=currNum;
        }

    }
    let result = evenSum-oddSum;
    console.log(result);
    
}
solve([1,2,3,4,5,6])