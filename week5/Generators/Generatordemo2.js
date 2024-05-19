function* gen() {
    console.log("start");

    yield 10;

    console.log("middle");

    const x = 10 + (yield 30);

    console.log(x);

    yield x;
}

//scenerio 1
// const v = gen();

// console.log(v.next());
// console.log(v.next());
// console.log(v.next()); // it is same as console.log(v.next(undefined));

/* Output of scenerio 1

start
{ value: 10, done: false }   
middle
{ value: 30, done: false }   
NaN
{ value: NaN, done: false } */

//Scenerio 2

const v = gen();

console.log(v.next());
console.log(v.next());
console.log(v.next(99));


/** Output of scenerio 2
 * 
 * start
   { value: 10, done: false }
   middle
   { value: 30, done: false }
   109
   { value: 109, done: false }
 */