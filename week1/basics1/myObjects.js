const user = {
    username: "vkr",
    name: "vishal",
    email: "v@vr.com",
    age: 20,
    isAdmin: false,
    isLoggedin: true,
    tea: ["Lemon", "peach", "ginger"],
    address: {
        city: "Bijnor",
        state: "Uttar Pardesh"
    }
}

// ways to accessing objects
console.log(user.age);
console.log(user['age']);
console.log(user.tea[1]);
console.log(user.address.state);
console.log(user['address']);
console.log(user['address']['state']);

user.email  = "vishal"