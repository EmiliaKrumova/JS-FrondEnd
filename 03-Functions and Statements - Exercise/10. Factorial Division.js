function factorialDivision(first, second){
    function factorial(num){
        let product = 1;
        for(i = 1; i<=num;i++){
            product*=i;
        }
        return product;
    
    }
    // let a = factorial(first);
    // let b = factorial(second)
    // let result = a/b

   let result = (factorial(first))/(factorial(second));
    console.log(result.toFixed(2));


}
factorialDivision(6,
    2)


