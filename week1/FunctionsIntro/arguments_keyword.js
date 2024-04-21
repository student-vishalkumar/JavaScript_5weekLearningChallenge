function addNumbers(){
    // no parameters passed in the function
    let sum = 0;
    for(let i = 0; i <arguments.length; i++) {
        // i denote index of 0 based
        sum += arguments[i];
    } 
    return sum;
    
}

console.log(addNumbers(9, 1, 2));
console.log(addNumbers(9, 1, 2, 0, 1));
console.log(addNumbers(5));