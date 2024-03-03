function orders(product, count) {
    let singlePrice = 0;
    switch (product) {
        case "water":
            singlePrice = 1;
            break;
        case "coffee":
            singlePrice = 1.5;
            break;
        case "coke":
            singlePrice = 1.4;
            break;
        case "snacks":
            singlePrice = 2

    }
    let result = singlePrice*count;
    console.log(result.toFixed(2));
}
orders("water", 5)