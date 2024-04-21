// above 99, You get a life up
// belown that you don't get it 

let score = 110
let life = 3
let bullets = 1000

console.log("welcome to game");

if (score > 99){
    console.log("You gained a life");
    score = score - 100
    life++
    let bullets = 2000
    console.log(`Your bullets are ${bullets}`);
} else {
    console.log("You don't get a life");
}

console.log(`Your score is ${score} and my life is ${life} and bullets are ${bullets}`);