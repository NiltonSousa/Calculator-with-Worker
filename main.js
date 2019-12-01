//Reference code by: https://github.com/mdn/simple-web-worker/blob/gh-pages/index.html

const first = document.getElementById("#first");
const second = document.getElementById("#second");
const result = document.getElementById("#result");

//
//Verify if browser support
//
if(window.Worker){
    const w = new Worker("worker.js");

    //
    //Set a first value on worker when user insert a value
    //
    first.onchange = () =>{

        w.postMessage([first.nodeValue, secod.value]);
        console.log("First input sent!");
       
    }

    //
    //Set a first value on worker when user insert a value
    //
    second.onchange = ()=>{
        
        w.postMessage([first.value,second.value]);
        console.log("second input sent!");
    }

    //
    //Receive a message from worker after processing a thread
    //
    w.onmessage = e =>{
        result.innerHTML = e.data;
        console.log("Result's back lo/ !!");
    }
}else{
    result.innerHTML = "Your browser doesn't have support to webWorkers, sorry :C !!"
}