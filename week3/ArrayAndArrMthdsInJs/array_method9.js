const  shoppingCart = [
    {product: 'shoes', price: 80, quantity: 1},
    {product: 'Bag', price: 120, quantity: 2},
    {product: 'Watch', price: 250, quantity: 4}
];

const result = shoppingCart.reduce(function reducer(accumulator, currentvalue){
    console.log(accumulator, currentvalue);
    return accumulator+10;
}, 0)

console.log(result);

console.log();
//doubt

// function factorial() {
//     return [1,2,3,4,5].reduce((acc, val)=>acc*val,1)
// }

function factorial() {
    return [1,2,3,4,5].reduce(function reducer(acc, val){
        return acc*val;
    },1)
}
console.log(factorial());