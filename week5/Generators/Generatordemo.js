function* gen() {

    console.log("lin1 1");
    yield 10;

    console.log("line 2");
    yield "vishal";

    console.log("line 3");
    yield 3;

    console.log("line 4");
    yield 4;

    console.log("line 5");

}

const x = gen();

console.log(x.next());
console.log("Is paused");
console.log(x.next());
console.log("Is paused");
console.log(x.next());
console.log(x.next());