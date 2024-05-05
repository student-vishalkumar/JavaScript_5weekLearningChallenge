let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//index  0  1  2  3  4  5  6  7  8
// get value at a particular index -> nameOfArray[indexWantToAccess]
console.log(x[4], x[2], x[100]); // 5 undefined

// update an index ?
// arrayName[index] = value

x[4] = 44;
console.log(x);

const arr = Array(5);
console.log(arr);
console.log(arr[0]);