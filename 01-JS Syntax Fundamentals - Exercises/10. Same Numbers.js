function same(num){
    
   
    let sum =0;   
    
    let isSame = true;
    while (num>0){
        let currNum = num%10
        sum+=currNum
        num = Math.trunc(num/10)     
        if(num<=0){
            break;
        }   

       if(currNum!==num%10){
        isSame = false;}    
       
      

    }
    console.log(isSame);
    console.log(sum);
}
same(222)
same(1234)