//Reference code by: https://github.com/mdn/simple-web-worker/blob/gh-pages/index.html
//
//When this worker is invited, the callback of onmessage function is invoked
//
onmessage = e => {
    console.log("Worker is work!!!");
    let dataReceived = e.data[0] * e.data[1];

    //
    //Treatment of dataReceived
    //
    if (dataReceived === "" || typeof dataReceived === "undefined") {
        postMessage("Please send two numbers!!")
    } else {

        console.log("Worker it is finished! Posting message to back main.js.");
        let result = "Result is: " + dataReceived;
        postMessage(result);

    }

}