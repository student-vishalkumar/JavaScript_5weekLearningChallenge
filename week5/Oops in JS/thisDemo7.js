class Product {
    constructor(n,p,d,i) {
        this.name = n;
        this.price = p;
        this.desc = d;
        this.image = i;
    }

    displayProduct() {
        setTimeout( () => {
            console.log("Product details are " , this.name, this.price, this.desc, this.image);

        },5000)

        console.log("ending display product");
    }

    

}

// closure concept come in this scenerio

const p1 = new Product("iphone", 10000, "Apple iphone", "some image1");
console.log(p1);
p1.displayProduct();

const p2 = new Product("s23", 10000, "samsung galaxy", "some image1");
console.log(p2);
p2.displayProduct();