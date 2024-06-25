const ratingsectionref = document.querySelector(".rating-section");
const smileys = ["😖","😕","😑","😍","😎"]
const smileyref = document.querySelector(".smiley")

let hovervalue = 0 ;
let selectedstar = 0;
function createstars(){
    smileys.forEach( (item,idx)=>{
        const newelementref = document.createElement("div");
        //newelementref.classList.add("rating-box","empty")
        newelementref.setAttribute("data-id",idx + 1)
        newelementref.setAttribute("class","rating-box empty");
        ratingsectionref.appendChild(newelementref);

    });

};

ratingsectionref.addEventListener("mouseover",function(ev){
    if(ev.target.classList.contains("rating-box")){
        const currentstar = ev.target.dataset.id;
        hovervalue = currentstar;
        rerenderstar();
    }
})

ratingsectionref.addEventListener("mouseleave",function(ev){
    hovervalue = 0;
    rerenderstar();
    });

ratingsectionref.addEventListener("click",function(ev){
    if(ev.target.classList.contains("rating-box")){
        const currentstar = ev.target.dataset.id;
        selectedstar = currentstar;
        rerenderstar();
        smileyref.innerText = smileys[selectedstar - 1] 
    }
})



function rerenderstar(){
    const ratingboxes = document.querySelectorAll(".rating-box");
    [...ratingboxes].forEach((boxRef,idex) =>{
        if (idex < (hovervalue || selectedstar)){
            boxRef.classList.add("full")
            boxRef.classList.remove("empty")
        }else{
            boxRef.classList.remove("full")
            boxRef.classList.add("empty")
        }
        
    });

    
}



createstars()