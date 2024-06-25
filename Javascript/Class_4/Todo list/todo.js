
const todoitem = [
    {
    id : 1,
    Task : "Do Coding",
    iscompleted : false
    },
    {
        id : 2,
        Task : "College Study",
        iscompleted : false
    },
    {
        id : 3,
        Task : "Workout",
        iscompleted : false
    }
]


const inputRef = document.querySelector("#root .container input")

const parentRef = document.querySelector(".container .todolist")

function render(){

    todoitem.forEach(function(item){
        const liRef = document.createElement("li")
        const spanRef = document.createElement("Span")
        spanRef.innerHTML = "<i> hello</i>"
        liRef.appendChild(spanRef)
        liRef.innerText = item.Task
        liRef.setAttribute("data-value",item.id)
        parentRef.appendChild(liRef)
    })
}

render()




inputRef.addEventListener("keyup",function(e){
    
    if (e.key === "Enter"){
        
        todoitem.push({
            id : todoitem.length + 1,
            Task : e.target.value,
            iscompleted : false
        })
    const liRef = document.createElement("li") 
    liRef.innerText = e.target.value
    liRef.setAttribute("data-value",todoitem.length + 1)
    parentRef.appendChild(liRef)
    e.target.value = ""

    }

})


parentRef.addEventListener("click",function(e){
    if(e.target.classList.contains("checked")){
        e.target.classList.remove("checked")
    }
    else{
        e.target.classList.add("checked")
        todoitem.forEach(function(item){
        if(item.id == e.target.getAttribute("data-value")){
            item.iscompleted = true

        }})
    
    }
    
})

parentRef.addEventListener("dbclick",function(e){
    e.target.classList.add("remove")
})