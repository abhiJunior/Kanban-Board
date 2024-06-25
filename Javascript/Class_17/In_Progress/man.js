const startref = document.querySelector(".buttons .start");
const stopref = document.querySelector(".buttons .stop");
const restartref = document.querySelector(".buttons .restart");
const inprogressref = document.querySelector(".progress .in-progress")
/*
let intervalref;
function rerender(){
        intervalref = setInterval(()=>{
        let newvalue = getprogressvalue() + 5;
        setprogressvalue(newvalue);
        if (newvalue >= 100){
            clearInterval(intervalref);
        }
    },1000);
}

function stop_progress(){
    clearInterval(intervalref);
}
*/
let requestAnimationFrameRef;
function rerender(){
    let newvalue = getprogressvalue() + 5;
    setprogressvalue(newvalue);
    if (newvalue < 100){
        requestAnimationFrameRef = requestAnimationFrame(rerender)
    }
}

function stop_progress(){
    cancelAnimationFrame(requestAnimationFrameRef);
}

function getprogressvalue(){
    return  +inprogressref.style.width.split("%")[0]; 
    
}

function setprogressvalue(value){
    inprogressref.style.width = `${value}%`;
}




startref.addEventListener("click",function(){
    rerender();
});

stopref.addEventListener("click",function(){
    stop_progress();
})

restartref.addEventListener("click",function(){
    stop_progress();
    inprogressref.style.width = "0%"
})