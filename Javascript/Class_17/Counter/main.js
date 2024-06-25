const counterwrapperRef = document.querySelector(".counter-wrapper");
const counterRef = counterwrapperRef.querySelector(".counter");
const incredecRef = counterwrapperRef.querySelector(".increment-decrement input");
const incbuttonRef = counterwrapperRef.querySelector(".button .increment-button");
const decbuttonRef = counterwrapperRef.querySelector(".button .decrement-button");
const resetRef = counterwrapperRef.querySelector(".reset button");

incbuttonRef.addEventListener("click",function(ev){
    counterRef.innerHTML = +counterRef.innerHTML + +incredecRef.value
});

decbuttonRef.addEventListener("click",function(ev){
    if (counterRef.innerHTML > 0){
        counterRef.innerHTML = +counterRef.innerHTML - +incredecRef.value
    }
});

resetRef.addEventListener("click",function(){
    counterRef.innerHTML = 0
});