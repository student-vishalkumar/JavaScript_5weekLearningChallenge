// build a rating system for pizzahut

// 1 star = Poor
// 2 star = emm , ok
// 3 star = average
// 4 star = cool
// 5 star = great 
// 6 star = awesome
// 7 star = nailed it 

let getStarFromUser = "8"
let starInNumber = parseInt(getStarFromUser)

if (starInNumber == 1){
    console.log("poor");
} else if (starInNumber == 2) {
    console.log("emm , ok");
} else if (starInNumber == 3) {
    console.log("average");
} else if (starInNumber == 4) {
    console.log("cool");
} else if (starInNumber == 5) {
    console.log("great");
} else if (starInNumber == 6) {
    console.log("awesome");
} else if (starInNumber == 7) {
    console.log("nailed it");
} else {
    console.log("I don't know the rating !!!");
}