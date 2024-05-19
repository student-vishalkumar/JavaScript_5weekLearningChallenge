function downloader(url){
    console.log("Strated downloading from ", url)
    return new Promise((res, rej) => {
        setTimeout(() =>{
            console.log("Download completed")
            let downloadedData = "dummyContent";
            res(downloadedData)
        }, 4000)
    })
}

function writeFile(data) {
    return new Promise((res, rej) =>{
        console.log("Strated writing data from ", data);
        setTimeout(()=>{
            console.log("writing completed");
            let fileName = "dummy.txt"
            res(fileName)
        }, 3000)
    })
}

function uploadFile(fileName, newUrl){
    return new Promise((res, rej)=>{
        console.log("Strarted uploading from the " , fileName," on the url" ,newUrl);
        setTimeout(()=>{
            console.log("upload complete")
            let uploadResponse = "success"
            res(uploadResponse)
        }, 2000)
    })
}

// downloader("www.google.com")
// .then((downloadedData) =>{
//     writeFile(downloadedData).then((fileName)=>{
//         uploadFile(fileName, "www.drive.google.com")
//     });
// })

downloader("www.google.com")
.then((downloadedData) => writeFile(downloadedData))
.then((fileName) => uploadFile(fileName, "www.drive.google.com"))
.then((response) => console.log(response));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then 