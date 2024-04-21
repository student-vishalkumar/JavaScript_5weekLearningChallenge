let i = 20;
while(i >= 1) {
    console.log(i);
    i--;
}

console.log("");

// using for loop
for(let i = 20; i >= 1; i--) {
    console.log(i); // this will print in new line
}

for(let i = 20; i >= 1; i--) {
    process.stdout.write(i + " "); //// this will print in same line this doesnot work in browser but work in nodejs
} 

// alert("hi") doesnot work in nodejs but work in beowser