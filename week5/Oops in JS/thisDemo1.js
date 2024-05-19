const obj = {
    x:10,
    y:20,

    display: function() {
        console.log(`value of x is ${this.x} and ${this.y}`);
    }
}

obj.display();