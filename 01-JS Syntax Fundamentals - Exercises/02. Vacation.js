function vacation(count, type, day) {
    let price;
    let total;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45
            } else if (day === "Saturday") {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            total = count * price;

            if (count >= 30) {
                total *= 0.85;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                price = 10.90
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            if (count >= 100) {
                count -= 10;
            } total = count * price;
            break;
        case 'Regular':
            if (day === 'Friday') {
                price = 15
            } else if (day === "Saturday") {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            total = count * price;
            if (count >= 10 && count <= 20) {
                total *= 0.95;
            }
            break;

    }console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30,"Students","Sunday")
vacation(40, "Regular", "Saturday")