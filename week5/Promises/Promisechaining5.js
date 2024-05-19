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
})
.then(function g(value) {
    console.log("value in second then", value);
    return value*2;
})
.then(function h(value) {
    console.log("value in second then", value);
    return value*2;
})
.catch((error) => {
    console.log("Some exception come in between", error);
})