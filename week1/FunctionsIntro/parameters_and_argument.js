// function calculateSquare(num) {
//     // Here num is a parameter
//     // logic to calculate the square of a number
//     let squareValue = num * num;

//     // return the output of the square value
//     return squareValue;
// }
 
// calculateSquare(9); // 9 is an argument

//Q. write a function calculate sum of three numbers passed as an argument. Return the sum as output

function sumOfThreeNum(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    return sum; 
}

let result = sumOfThreeNum(2, 3, 4);
console.log(result);