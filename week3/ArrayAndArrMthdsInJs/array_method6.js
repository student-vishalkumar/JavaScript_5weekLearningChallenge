const arr = [1,2,3,4,5,6,7]

const  oddelements = arr.filter((element) =>{
    // logic you write here
    const xyz = element +2; //......
    return element % 2 != 0; //not returning is equal to saying return undfined 
})

console.log(arr);

console.log(oddelements); //new array // after not writing return statement output id empty array


const newArray = arr.map((element) =>{
    if(element % 2 != 0) 
    return element;
})

console.log(newArray);