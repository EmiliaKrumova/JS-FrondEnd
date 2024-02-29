function leap(year){
    let result;
    if(year%4===0&&(year%100!==0||year%400===0)){
        result='yes'

    }else{
        result='no'
    }
    console.log(result);
}
leap(1984)
leap(2003)
leap(4)