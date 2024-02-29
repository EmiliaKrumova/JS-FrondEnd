function solve(text){
    let textArr = text.toUpperCase()
    .match(/[a-zA-Z0-9]+/g)
    .join(', ' );
    console.log(textArr);
}
solve('Hi, how are you?')
solve('hello')
solve("!w< ,,dsa,ds08adas,,  985?? ,das!")