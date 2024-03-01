function list(arr){
    let result = arr.sort((a, b) => a.localeCompare(b, "bg-BG"))
    for(let i = 1;i<=result.length;i++){
        console.log(`${i}.${result[i-1]}`);
    }
}
list(["John", "Bob", "Christina", "Ema"])