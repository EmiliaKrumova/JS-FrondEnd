function radar(driverSpeed, way) {
    let allowedSpeed = 0
    switch (way) {
        case 'motorway':
            allowedSpeed = 130;
            break;
        case 'interstate':
            allowedSpeed = 90;
            break;
        case 'city':
            allowedSpeed = 50;
            break;
        case 'residential':
            allowedSpeed = 20;
            break;
    }
    if(driverSpeed<=allowedSpeed){
        console.log(`Driving ${driverSpeed} km/h in a ${allowedSpeed} zone`);
    }else{
        let diff = driverSpeed-allowedSpeed;
        let status = '';
        if(diff<=20){
            status = 'speeding';
            
        }else if(diff<=40){
            status = 'excessive speeding'
        }else{
            status = 'reckless driving'
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);

    }

}
radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')