// eval metod

const result = eval("4+5");
console.log(result);

let x=10;
let y=20;
console.log(x,y);
eval(`x=${y}`);
console.log(x,y);

console.log(eval("`3`+2"));

//template string

const obj = {
    name : "iphone",
    brand : "apple",
    price : 120000
}

const str = `The name of the product is ${obj.name} which belongs to brand ${obj.price} with a price ${obj.price}`;

console.log(str);