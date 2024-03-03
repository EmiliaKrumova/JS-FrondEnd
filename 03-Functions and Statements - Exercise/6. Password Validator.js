function validator(text){
    let isValid = true;

if(!lengthValidation(text)){
    console.log('Password must be between 6 and 10 characters');
    isValid = false;

}
if(!isAlphaNumeric(text)){
    console.log('Password must consist only of letters and digits');
    isValid = false;
}
if(!atLeastTwoDigits(text)){
    console.log('Password must have at least 2 digits');
    isValid = false;
}

if(isValid){
    console.log('Password is valid');
}

function lengthValidation(text){
    if(text.length>=6&& text.length<=10){
        return true;
    }
    return false
}
function isAlphaNumeric(text){
    if (!text.match(/^[0-9a-zA-Z]+$/)){
        return false;
    }
    return true
}
function atLeastTwoDigits(text){

    if (!text.match(/([0-9]){2,}/)){
        return false;
    }
    return true
   
}

}
validator('Pa$s$s')