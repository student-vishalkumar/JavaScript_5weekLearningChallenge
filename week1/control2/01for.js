/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for ([initialexpression/declaration]; [condition]; [changer]){
    //body
}
*/
let userScore = 1
const highestValue = 10
for(userScore; userScore <= highestValue; userScore = userScore + 1){
    console.log(`userScore is ${userScore}`);
}

console.log("\n");

let Userscore = 10
const minValue = 0

// 1. if score i hits 5, don't print after that
// 2.  Remove previous demand , if score hits 5 , skip printing 5 but rest value should be printed
for(Userscore; Userscore >= minValue; Userscore--){
    // if (Userscore == 5) {
    //     break;
    // }

    if (Userscore == 5) {
        continue;
    }
    console.log(`Userscore is ${Userscore}`);
}