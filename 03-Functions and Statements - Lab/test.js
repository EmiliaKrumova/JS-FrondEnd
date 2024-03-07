function solve(object){
    object.b = 6;
    object.a.x = 8;
}

let obj = {
    a:{
        x:1
    },
    b:2,
}



let newObj = structuredClone(obj)
solve(newObj)
console.log(obj, obj.a.x);
console.log(newObj, newObj.a.x);