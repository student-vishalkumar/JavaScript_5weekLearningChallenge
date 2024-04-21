function addNumbers(a, b, c) {
    console.log(arguments);
    return a + b + c; 
}

console.log(addNumbers(10, 20, 30));