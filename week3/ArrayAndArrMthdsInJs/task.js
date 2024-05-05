/**
 * 
 * make a call back
 */
function customforEach(arr, cb) {
    for(let i = 0; i<arr.length; i++) {
        // now we have access array elements
        console.log("return value ",cb(arr[i]), "of index",i , "element",arr[i]);
    }
}

customforEach([1,2,3], (x) => {
    return x*x;
    
})