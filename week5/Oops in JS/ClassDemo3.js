class Product{

    name;
    price;
    description;
    image;

    constructor(n, p, d, i) {
        this.name = n;
        this.price = p;
        this.description = d;
        this.image = i;

        console.log("created new object");

    }

    buyProduct() {
        console.log("bought a new product");
    }
}

const obj = new Product("S23", 90000, "Smasung Phone", "some image");
console.log(obj);