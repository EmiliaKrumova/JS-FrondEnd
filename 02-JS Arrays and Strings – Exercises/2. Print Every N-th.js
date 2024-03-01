function increment(arr, step){
    let array = arr;
    let output = []
    for(let i = 0; i<array.length; i+=step){
        output.push(array[i]);
    }
    return output;
}
increment(['5', '20', '31', '4', '20'], 2)
increment(['dsa','asd', 'test', 'tset'], 2)