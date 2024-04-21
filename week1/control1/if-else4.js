//Login system
// if user provide email, password, then allow login, else ask for it

const eamil = ""

if (email) {
    if (password) {
        console.log("welcome in the app");
    } else {
        console.log("please enter password");
    }
} else {
    console.log("please enter email");
}

//Logical operator
// && -> AND , || -> OR

if (email && password) {
    console.log("welcome to the app");
} else {
    console.log("Please enter the email and password");
}

// allow user to login with google or github

const googleLoginToken = ""
const githubLoginToken = ""

if (googleLoginToken || githubLoginToken) {
    console.log("welcome to the app");
} else {
    console.log("Please login to view your account");
}
