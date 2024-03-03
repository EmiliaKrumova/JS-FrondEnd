function sign(first, second,last){
    let countOfNegative = 0;
    isNegative(first);
    isNegative(second);
    isNegative(last);   
    
    let signType = '';

    if(countOfNegative%2==0){
        signType = 'Positive'

    }
    else{
        signType = 'Negative'
    }
    console.log(signType);
   
    function isNegative(number){
        if(number<0){
           countOfNegative++;
        }
    }
}
sign(5,
    1,
    1
    )