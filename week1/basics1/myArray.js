const myArray = [1, 2, 3, 4, 5]

const myNewArray = new Array(1, 2, 3, 4, 5)
console.log(myArray[1]);

const dcHeros = ["batman", "superman", "Flash","GL","Arrow"]
console.log(dcHeros.length);
// dcHeros[dcHeros.length] = "wonder woman"
dcHeros.push("wonder woman")
console.log(dcHeros);
// const lastHero = dcHeros.pop()
// console.log(dcHeros);
// dcHeros.unshift("aquaman");
// console.log(dcHeros);

// console.log(myArray.toString());
// console.log(dcHeros.toString());
// console.log(dcHeros.join());
// console.log(dcHeros.join("-"));
console.log(dcHeros.slice(1,3));
console.log(dcHeros);
console.log(dcHeros.splice(1,3));
console.log(dcHeros);