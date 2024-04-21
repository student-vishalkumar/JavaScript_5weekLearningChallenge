/**
 * 
 * *
 * * *
 * * * *
 */

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

/**
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 */
console.log();

let rowAndcolum = 6;
for(let i = 1; i <= rowAndcolum; i++) {
    for(let j = 1; j <= rowAndcolum; j++) {
        process.stdout.write("* ");
    }
    console.log();
}