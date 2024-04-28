function letReassignment(){
    let x=10;
    console.log(x);
    x = "Vishal"; // no error
    console.log(x);
}

function constReassignment(){
    const x=10;
    console.log(x);
    x = "Vishal"; // error // Assignment not possible in const
    console.log(x);
}

// letReassignment();
// constReassignment();

function constReassignmentWithObject(){
    const obj = {x:10 , y:20}
    console.log(obj);
    obj = {a:5}; // reassignment to a brand new object // throw an error
    console.log(obj);
}

// constReassignmentWithObject();

function constUpdatingValueInCaseObject(){
    const obj1 = {x:100,y:0}
    obj1.x = 90; //this do not throw an error
    obj1.z = 99;
    console.log(obj1);
}

function temp(){
    const x = {a:10 , y:20};
    console.log(x);
    y = x;
    y.a = 19;
    console.log(x);
    console.log(y);
}

constUpdatingValueInCaseObject();
temp();