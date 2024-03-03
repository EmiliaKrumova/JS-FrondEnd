function oddEvenSum(number){
    let numString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0;i<numString.length; i++){
        let curNum = Number(numString[i]);
        if(curNum%2==0){
            evenSum+=curNum

        }else{
            oddSum+=curNum
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddEvenSum(3495892137259234)