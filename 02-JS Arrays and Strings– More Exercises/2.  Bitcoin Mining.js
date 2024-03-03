function mining(array){
    const goldPricePerGram = 67.51;
    const bitcoinPrice = 11949.16;
    let gold = array;
    let moneyEarned = 0;
    let bitcoins = 0;
    let firstDay;
    for(let i = 1;i<=gold.length; i++){
        let currGold = gold[i-1];
        if(i%3==0){
            currGold*=0.7;
        }
        moneyEarned+=currGold*goldPricePerGram;
        if(moneyEarned>=bitcoinPrice){
            while(moneyEarned>=bitcoinPrice){
                moneyEarned-=bitcoinPrice;
                if(bitcoins==0){
                    firstDay=i;
                }
                bitcoins++;
            }           
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins>0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);

    }
    console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`);
    

}
mining([100, 200, 300]);
mining([50, 100])
mining([3124.15, 504.212, 2511.124])