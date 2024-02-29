function print(startNum, endNum) {
    let sum = 0;
    var result = '';

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        result = result + `${i}` + ' ';
    }
    console.log(result);
    console.log(`Sum: ${sum}`);

}
print(5, 10)
print(50, 60)