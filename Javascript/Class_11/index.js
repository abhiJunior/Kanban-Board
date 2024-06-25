

const h1title = document.getElementById("title");
//h1title.style.backgroundColor = "blue"
h1title.innerText = "Book My Interview"
//console.log(h1title);

const h5Element = document.createElement("h5");
h5Element.innerText = "This are the various shows";

const headingSection = document.querySelector(".heading-Section");
heading-Section.appendChild(h5Element);


//-------------------------------------------Change Theme-----------------------------------------------------------------------
let dark = false
function darkenmode(){
    var bodyref = document.querySelector("body");
    bodyref.style.backgroundColor = "black";
    //bodyref.classList.add("black");
    //bodyref.classList.remove("white");
    dark = true;
}
function ligthenbackground(){
    var bodyref = document.querySelector("body");
    bodyref.style.backgroundColor = "white";
    //bodyref.classList.add("white");
    //bodyref.classList.remove("black")
    dark = false;
}

const buttonref = document.querySelector(".darkModeButton")

// show "hi" message on clicking anywhere on screen
buttonref.addEventListener("click",function(){
    if (dark === false){
        darkenmode();
    }else {
        ligthenbackground();
    }
    
});
//---------------------------------------Text_Config---------------------------------------------
function inc_frontsize(){
    const titleref = document.querySelector("#title");
    titleref.style.fontSize = "100px";
}
const fontref = document.querySelector(".textConfig")
fontref.addEventListener("click", function(){
    inc_frontsize()
})



// change the color on hover
const titleref = document.querySelector("#title");
console.log(titleref);
function backtitlecolor(){
    titleref.style.backgroundColor = "yellow";
    
}
function resettitlecolor(){
    titleref.style.backgroundColor = "transparent";
}

titleref.addEventListener("mouseover",function(){
    backtitlecolor();
})
titleref.addEventListener("mouseout", function(){
    resettitlecolor();
})


// Add Event Listener to each element in the list

const movieref = document.querySelectorAll(".movies");
movieref.forEach(function(itemref){
    itemref.addEventListener("click",function(event){
        alert(event.currentTarget.querySelector(".price").innerText);
    })
})



document.querySelector("select").addEventListener("change",function(e){
    console.log(e.target.value);
})