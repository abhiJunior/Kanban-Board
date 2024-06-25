const openModalButtonRef = document.querySelector(".quick-action .icon.add");
const closeModalButtonRef = document.querySelector(".modal .right-section .priority-filter .closed")
const ModalRef = document.querySelector(".modal")
const TextareaRef = document.querySelector(".modal textarea");
const priorityBoxRef = document.querySelectorAll(".modal .right-section .priority-filter .box")
function openModal(){
    ModalRef.classList.remove("hide");
};
function closedModal(){
    ModalRef.classList.add("hide");
};


openModalButtonRef.addEventListener("click",function(){
    const isHideClassApplied = [...ModalRef.classList].includes("hide");
    if(isHideClassApplied){
        openModal()
    } else{
       closedModal()
    }   
});
closeModalButtonRef.addEventListener("click",function(){
    ModalRef.classList.add("hide");
});

const Tasks = [];
const newTasks = {
    id : "",
    desription : "",
    priority : ""
};

TextareaRef.addEventListener("keyup",function(ev){
    if (ev.key == "Shift"){
        const desription = ev.target.value
        const priority = getselectedclass()
        console.log(priority);
        Tasks.push({
            id : Tasks.length + 1,
            desription : desription,
            priority : priority
        })
        console.log(Tasks)
        closedModal();
    }
});

function getselectedclass(){
    let priority = ""
    priorityBoxRef.forEach(function(singleBoxRef,indx){
        if ([...singleBoxRef.classList].includes("selected")){
            priority = `p${indx + 1}`
        }
    })
    return priority;  
}

function removeselectedclassfrombox(){
    priorityBoxRef.forEach(function(singleBoxRef){
        singleBoxRef.classList.remove("selected");
    })
}
function addselectedclasstocurrentbox(boxRef){
    boxRef.classList.add("selected");
}

priorityBoxRef.forEach(function(boxRef){
    boxRef.addEventListener("click",function(ev){
        removeselectedclassfrombox();
        addselectedclasstocurrentbox(ev.target);
    })
})