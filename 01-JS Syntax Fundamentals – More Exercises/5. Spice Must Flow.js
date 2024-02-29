function solve(startYeld){
    let yeld = startYeld;
    let collectedyeld = 0;
    let counterOfDays = 0;
    while(yeld>=100){
        collectedyeld+=yeld;
        yeld-=10;
        collectedyeld-=26;
        counterOfDays++;

    }
    collectedyeld-=26;
    console.log(counterOfDays);
    console.log(collectedyeld);
}
solve(450)