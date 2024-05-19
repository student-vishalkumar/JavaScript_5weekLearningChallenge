function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            rej(time);
        }, time);
    });
}

createPromise(1000)
.then(function f(value) {
    console.log("value in first then",value);
    return value*2;
}, function r1(value) {
    //rejection ccallback for pr1
    console.log("Hnadler for pr1", value);
    throw 300;
})
.then(function g(value) {
    console.log("value in second then", value);
    return value*2;
})
.then(function h(value) {
    console.log("value in second then", value);
    return value*2;
})
.catch((error) =>{
    console.log("some exception came in between", error);
})