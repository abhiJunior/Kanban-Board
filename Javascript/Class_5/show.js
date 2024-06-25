//-----------------------------Create Element-------------------------------------------



const h3Element = document.createElement("h3");
h3Element.innerHTML = "<b><i>---By Abhishek Kumar </i></b>"

const headingsection = document.querySelector(".heading-section");

headingsection.appendChild(h3Element);

let darkmode = false;

function darktheme(){
    
    const bodyRef = document.querySelector("body");
    //bodyRef.style.backgroundColor = "black";
    bodyRef.classList.add("black")
    bodyRef.classList.remove("white")
    darkmode = true;
}

function lightenTheme(){
    
    const bodyRef = document.querySelector("body");
    //bodyRef.style.backgroundColor = "white";
    bodyRef.classList.add("white")
    bodyRef.classList.remove("black")
    darkmode = false;
}

const darkbuttonRef  = document.querySelector(".darkModeButton")

darkbuttonRef.addEventListener("click",function(ev){
    if( darkmode === false){
        darktheme()
    }else{
        lightenTheme()
    }
})







const moviesRef = document.querySelectorAll('.movies')

moviesRef.forEach(function(movie){
    movie.addEventListener("click",function(ev){
        alert(ev.currentTarget.querySelector(".price").getAttribute("data-category"))
    })
})