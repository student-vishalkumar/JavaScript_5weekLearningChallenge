function factorial(n){
    if(n == 0){
        return 1;
    }
    let fact = n * factorial(n-1);
    return fact;
}

const result = factorial(5);
console.log(result);
