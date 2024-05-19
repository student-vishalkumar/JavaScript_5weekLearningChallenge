class Product{

    // name;
    // price;
    // description;
    // image;

    constructor(n, p, d, i) {
        console.log("Object before allocating values" , this);
        this.name = n;
        this.price = p;
        this.description = d;
        this.image = i;
        this.rating = 0 // default value

        console.log("created new object", this);

    }

    buyProduct() {
        console.log("bought a new product");
    }
}

const obj = new Product("S23", 90000, "Smasung Phone", "some image");
console.log(obj);