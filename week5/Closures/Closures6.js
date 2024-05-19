function createCount() {
    let count = 0;

    return {

        increment: function () { count +=1 },
        decrement: function () { count -= 1},
        getcount: function () { return count }
    }
}

let c = createCount()

c.increment()
c.increment()
console.log(c.getcount())
c.decrement()
console.log(c.getcount());