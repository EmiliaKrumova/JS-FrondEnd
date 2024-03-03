function pass(array) {
    let password = array[0]
        .split('')
        .reverse()
        .join('');
    let isCorrectPassword = false;
    let username = array.shift();
    let words = array;
    for (let i = 0; i < 4; i++) {
        if (password == words[i]) {
            isCorrectPassword = true;

            console.log(`User ${username} logged in.`);
            return;
        }
        if(i==3){
            break;
        }
        console.log("Incorrect password. Try again.");
    }
    if(!isCorrectPassword){
        console.log(`User ${username} blocked!`);
    }

}
pass(['Acer','login','go','let me in','recA']);
pass(['momo','omom'] )
pass (['sunny','rainy','cloudy','sunny','not sunny'])