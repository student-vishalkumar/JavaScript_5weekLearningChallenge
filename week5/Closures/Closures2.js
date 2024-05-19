function outer() {
    let i=0;

    function inner() {
        i += 1;
        return i;
    }

    return inner;
}

x = outer();

x();