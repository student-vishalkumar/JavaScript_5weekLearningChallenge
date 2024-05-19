function dosomething(task) {
    console.log("Initializing do smoething");

    setTimeout(() => {
        console.log("Timer done and task done", task);
    }, 3000)

    console.log("Exiting do smething after intializing a timer");
}

dosomething("do homework");