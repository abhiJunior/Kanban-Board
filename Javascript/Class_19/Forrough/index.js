const buttonRef = document.querySelector("button");
const bodyRef = document.querySelector("body")

const timeintervalRef = setInterval(() => {
    const divRef = document.createElement("div")
    divRef.innerText = "Hello!"
    bodyRef.appendChild(divRef)
    
}, 3000);

buttonRef.addEventListener("click",function(){
    clearInterval(timeintervalRef);
})



