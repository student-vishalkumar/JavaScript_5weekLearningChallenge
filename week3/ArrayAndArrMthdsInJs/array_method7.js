//Every method
const array = [1,30,39,29,10,13];
const result = (curentValue)=> curentValue<40;
console.log(array.every(result));
console.log();

const arr = [1,2,400,56,34];
const res = arr.every((element) => {
    console.log(element);
    return element<100;
})
console.log(res);

console.log();

// 'Some' method

const arr1 = [1,2,3,4,5];
const res1 = arr1.some((element) => {
    console.log(element);
    return element % 2 === 0;
})
console.log(res1);