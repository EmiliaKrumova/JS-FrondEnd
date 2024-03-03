function palindrome(array){

for(let i = 0; i<array.length;i++){
    console.log(isPalindrome(array[i])); 
}


isPalindrome(5650);
    function isPalindrome(number){
        let numAsString = number.toString();
        let reversed = numAsString.split('').reverse().join('');
        if(numAsString==reversed){
            return true;
        }
        return false;
     
    }
}palindrome([123,323,421,121] )