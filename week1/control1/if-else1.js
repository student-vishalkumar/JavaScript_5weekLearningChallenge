let temperature = 16

 if (temperature < 20){
     //body - executable code
     console.log("it's really cold");
 } else{
     console.log("it's really hot");
}

// driving licence system
let age = 19
const willYouGetDrivingLicence = false

if (age >= 18) {
    console.log("You get the driving licence");
    willYouGetDrivingLicence = True
} else {
    console.log("You are not eligible for driving licence");
    willYouGetDrivingLicence = false
}

const getDrivingLicence = age >= 18 ? "true part" : "false"