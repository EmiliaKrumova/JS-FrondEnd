function perfectNum(number){
    let sum = 0;
    let isPerfect = false;
    for(let i = 1; i<number; i++){
        if(number%i==0){
            sum+=i;
        }
    }
    if(sum==number){
        isPerfect = true;
    }
    if(isPerfect){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
}
perfectNum(1236498)