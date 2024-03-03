function calculate(firstNum,secondNum,operation){
    const operations = {
        multiply: (firstNum, secondNum) => firstNum * secondNum,
        divide: (firstNum, secondNum) => firstNum / secondNum,
        add: (firstNum, secondNum) => firstNum + secondNum,
        subtract: (firstNum, secondNum) => firstNum - secondNum,
      };
    
      console.log(operations[operation](firstNum, secondNum));
    
}
calculate(5,    5,    'multiply')