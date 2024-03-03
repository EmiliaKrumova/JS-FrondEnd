function printMatrix(number){
    let row = '';
    for(let i = 0; i< number;i++){
        row+=number + " ";
    }
    for(let i = 0; i< number;i++){
        console.log(row);
    }
}
printMatrix(7)