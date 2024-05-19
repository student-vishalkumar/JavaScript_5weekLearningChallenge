function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            rej(time);
        }, time);
    });
}

createPromise(10000)
.then(function f(value) {
    console.log("value in first then",value);
    return value*2;
}, function r1(value) {
    //rejection ccallback for pr1
    console.log("Executing r1 guys wohooo");
    return 700;
})
.then(function g(value) {
    console.log("value in second then", value);
    return value*2;
}, function r2(value) {
    // rejection callback for pr2
    console.log("chill bro i am there",value);
})
.then(function h(value) {
    console.log("value in second then", value);
    return value*2;
})