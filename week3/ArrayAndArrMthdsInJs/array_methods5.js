const arr = [2,3,1,4,5];

const result = arr.forEach((element) =>{
    console.log("Element is ",element);
    return element;  //if we have an return statement in forEach it is sill return undefined
})

console.log(result);

console.log();


const response = arr.map((element) => {
    console.log("Elements is ", element);
    return element; //if map is not return statement it returns array of undefined
})

console.log(response);

/**
 * map functin returns us an array
 * 
 * what is the content of this array ?
 * It is the club of all the return value from the call back
 */