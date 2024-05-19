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
.catch(function r1(err) {
    console.log("Don'y worry r1 is here",err);
    throw 11;
})
.then(function g(value) {
    console.log("value in second then", value);
    return value*2;
})
.catch(function r2(err) {
    console.log("Don't worry r2 is here",err);
    return 13;
})
.then(function h(value) {
    console.log("value in second then", value);
    return value*2;
})