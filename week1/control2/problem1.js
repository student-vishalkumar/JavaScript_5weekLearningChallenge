// given a number x . return the sum of digits of x. eg-1234, 10

let x = 1234
let sum = 0
while(x > 0) {
    let lastdigit = x % 10;
    sum = sum + lastdigit;
    // remove the last digit from x
    x = Math.floor(x/10);
}
console.log(sum);