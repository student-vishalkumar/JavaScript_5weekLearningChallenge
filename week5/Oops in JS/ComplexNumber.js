class Complex{


    constructor (rp, ip){

        this.real = rp;
        this.imag = ip;

    }

    add(num) {
        return `${this.imag + num.imag} + ${this.real + num.real}i`
    }

    multiply(num) {
        return `${(this.real*num.real) - (this.imag*num.imag)} + ${(this.real*num.imag) + (this.imag*num.real)}i`
    }
}


const c1 = new Complex(2,3);
const c2 = new Complex(2,1);

// (2+3i) + (2+1i) = (2+2) + (3+1)i => 4 + 4i
console.log(c1.add(c2));

// (2+3i) * (2+1i) = (2*2 - 3*1) + (2*1 + 3*2)i => 1 + 8i
console.log(c1.multiply(c2));