class Product{

    name;
    price;
    description;
    image;

    constructor() {
        this.name = "";
        this.price = 0;
        this.description = "";
        this.image = "";

        console.log("created new object");

    }

    buyProduct() {
        console.log("bought a new product");
    }
}

const obj = new Product();
console.log(obj);