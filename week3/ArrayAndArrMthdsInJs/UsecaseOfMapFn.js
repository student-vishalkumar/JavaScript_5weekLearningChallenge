// To modified the elements of an array

const product = [{id: 1, name:'iphone', price: '1000'}, {id: 2, name:'macbook', price: '2000'}, {id: 3, name: 'airpods', price: '200'}]

console.log("Product list :");
console.log(product);

console.log();

const modifiedproduct = product.map((product) =>{
    return {id: product.id, name: product.name};
})

console.log("ModifiedProductList :");
console.log(modifiedproduct);