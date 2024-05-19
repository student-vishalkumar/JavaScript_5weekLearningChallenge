function outer() {
    let i=0;
    let j=[1, 2, 3]
    let k= "vishal"

    function inner() {
        i += 1; //using i
        console.log(j); // using j
        return i;
    }

    i += 3;

    return inner;
}