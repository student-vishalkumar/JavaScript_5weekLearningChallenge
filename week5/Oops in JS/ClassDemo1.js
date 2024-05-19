class Product {
    // properties
    name;
    price;
    description;
    image;

    constructor() {
        console.log("created new product");
    }


    // behaviour
    buyProduct(){
        console.log("bought a new product");
    }
}

const obj = new Product();
console.log(obj);