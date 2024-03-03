function loading(number){
    let result = '';
    let count = number/10;
    let procentString = '%'.repeat(count)
    result+=procentString;
    let pointString = '.'.repeat(10-count);
    result+=pointString +'';
    if(number<100){
        console.log(`${number}% [${result}]`);
        console.log('Still loading...');
    }else{
        console.log('100% Complete!');
        console.log(`[${result}]`);
    }
}loading(0)