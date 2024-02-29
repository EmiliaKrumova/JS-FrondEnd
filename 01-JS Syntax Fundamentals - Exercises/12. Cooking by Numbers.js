function solve(number, ...operations){
    let num = Number(number);
    let oper = operations;
    for(let i = 0;i<oper.length;i++){
        if(oper[i]==='chop'){
            num/=2;
        }else if(oper[i]==='dice'){
            num = Math.sqrt(num);
        }else if(oper[i]==='spice'){
            num++;
        }else if(oper[i]==='bake'){
            num*=3
        }else if(oper[i]==='fillet'){
            num*=0.8;
        }
        console.log(num);
    }
}
//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')