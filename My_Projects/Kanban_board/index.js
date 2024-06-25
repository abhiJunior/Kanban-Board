const createref = document.querySelector(".quick-action .icon.add");
const deleteref = document.querySelector(".quick-action .icon.delete");
const modalref = document.querySelector(".modal");
const closeref = document.querySelector(".modal .right-section .close");
const textarearef = document.querySelector(".modal .left-section textarea");
const priorityboxesref = document.querySelectorAll(".modal .right-section .priority-filter .box")
let ticketsectionRef = document.querySelector(".Tickets-section");
const deletetrashref = document.querySelector(".Ticket-content .Ticket-delete")
const priorityfilterRef = document.querySelector("header .priority-filter")
const clearfilterRef = document.querySelector("header .quick-action .clear-filter")
const TicketpriorityRef = document.querySelector(".Ticket-contain .Ticket-priority")






function openmodal(){
    modalref.classList.remove("hide");
};
function closemodal(){
    modalref.classList.add("hide");
}
createref.addEventListener("click",function(){
    const hideapplied = [...modalref.classList].includes("hide");
    if (hideapplied){
        openmodal();
    }else{
       closemodal();
    }
});




closeref.addEventListener("click",function(){
    closemodal();
});
let Tasks;
function initializelocalstorage(){
    Tasks = getTasksfromlocalstorage();
    if (!Tasks){
        Tasks = [
            {
                id : (new ShortUniqueId())(),
            desprition : "new task 1",
            priority : "p2"
            },
            {
            id : (new ShortUniqueId())(),
            desprition : "new task 2",
            priority : "p3"
            },
        
            {
            id : (new ShortUniqueId())(),
            desprition : "new task 3",
            priority : "p1"
            }
        ]
        updateTaskstolocalstorage(Tasks);
    }
    Tasks = getTasksfromlocalstorage()
}   


initializelocalstorage();


 


const newTasks = {
    id : "",
    desprition : "",
    priority : ""
};

textarearef.addEventListener("keyup",function(ev){
    if (ev.key == "Shift"){
        
        const desprition = ev.target.value;
        const priority = getselected();
        // To do to add to the list
        var uid = new ShortUniqueId();
        Tasks.push({
            id : uid(),
            desprition : desprition,
            priority:priority
        });
        ListofTickets(Tasks);
        updateTaskstolocalstorage(Tasks);

        
        closemodal();
    }
});
function getselected(){
    let priority = "";
    priorityboxesref.forEach(function(singleref,idx){
        if([...singleref.classList].includes("selected")){
            priority = `p${idx + 1}`;
        }
    })
    return priority;
}

function removeselected(){
    priorityboxesref.forEach(function(singleref){
        singleref.classList.remove("selected");
    })
}
function addselected(boxref){
    boxref.classList.add("selected")
}

priorityboxesref.forEach(function(boxref){
    boxref.addEventListener("click",function(ev){
        removeselected();
        addselected(ev.target);

    });
});

function clearlist(){
    ticketsectionRef.innerHTML = ""
}

function createTicket(ticket){
    return`
    <div class="Ticket-priority" data-priority = "${ticket.priority}"></div>
    <div class="Ticket-id">${ticket.id}</div>
    <div class="Ticket-content">
        <div><textarea disabled >${ticket.desprition}</textarea></div>
        <div class="Ticket-lock locked">
            <i class="fa-solid fa-lock"></i>
            <i class="fa-solid fa-lock-open"></i>
        </div>
        <div class="Ticket-delete">
            <i class="fa-solid fa-trash "></i>
        </div>
        
    </div>
    
    `;
}

function ListofTickets(tickets){
    clearlist();
    tickets.forEach(function(ticket){
        const ticketHTML = createTicket(ticket);
        const ticketcontainerRef = document.createElement("div");
        ticketcontainerRef.setAttribute("class","Ticket-container");
        ticketcontainerRef.setAttribute("data-id",ticket.id);
        ticketcontainerRef.innerHTML = ticketHTML
        ticketsectionRef.appendChild(ticketcontainerRef);
        const textareaRef = ticketcontainerRef.querySelector(".Ticket-content textarea");
        textareaRef.addEventListener("blur",function(ev){  // Here is blur Event
            const currentTicketContainerref = ev.target.closest(".Ticket-container");
            const currentTicketID = currentTicketContainerref.getAttribute("data-id")
            console.log(currentTicketID)
            updateTaskDescription(currentTicketID,textareaRef.value)
            
        })
    });
};

function updateTaskDescription(id,updated_Description){
    const selectedTask = Tasks.find((Tasks) => Tasks.id === id);
    selectedTask.desprition = updated_Description;
    console.log(Tasks);
    updateTaskstolocalstorage(Tasks);
}

ticketsectionRef.addEventListener("click",function(ev){
    
    
    if ((ev.target.classList.contains("fa-lock")) || (ev.target.classList.contains("fa-lock-open")) ){
        const currentcontainerRef = ev.target.closest(".Ticket-container"); // Write with exact selector.
        const currentcontainerId = currentcontainerRef.getAttribute("data-id");
        const currentTextRef = currentcontainerRef.querySelector(".Ticket-content textarea");
        const lockRef = currentcontainerRef.querySelector(".Ticket-content .Ticket-lock");
        const isEdittable = lockRef.classList.contains("locked");
        console.log(lockRef);
        console.log(isEdittable);

        if(isEdittable){
            lockRef.classList.remove("locked");
            currentTextRef.removeAttribute("disabled");
        }
        else{
            lockRef.classList.add("locked");
            currentTextRef.setAttribute("disabled",true);
        }
        
        
    };

    if (ev.target.classList.contains("fa-trash")){
        const currentcontainerRef = ev.target.closest(".Ticket-container");
        const TicketId = currentcontainerRef.getAttribute("data-id");
        console.log(TicketId)
        Deletetasks(TicketId);
        ListofTickets(Tasks);
        
    };
    if (ev.target.classList.contains("Ticket-priority")){
        changepriority(ev.target)
    }

          
   
});

function Deletetasks(TicketId){
    Tasks = Tasks.filter(Task => Task.id != TicketId);
    updateTaskstolocalstorage(Tasks);
}


ListofTickets(Tasks)



function updateTaskstolocalstorage(Tasks){
    localStorage.setItem("Tasks",JSON.stringify(Tasks))
}

function getTasksfromlocalstorage(){
    const Tasksdata = localStorage.getItem("Tasks");
    return Tasksdata ? JSON.parse(Tasksdata) : undefined
}

deleteref.addEventListener("click",function(ev){
    const isdeleteenable = ev.currentTarget.classList.contains("enable")
    if (isdeleteenable){
        ev.currentTarget.classList.remove("enable")
        ticketsectionRef.classList.remove("enable-delete")    
    }
    else{
        ev.currentTarget.classList.add("enable")
        ticketsectionRef.classList.add("enable-delete")
    }
})

priorityfilterRef.addEventListener("click",function(ev){
    if (ev.target.classList.contains("box")){
        const selectedpriority = ev.target.id
        const priorityfilter = Tasks.filter(Task => Task.priority === selectedpriority)
        ListofTickets(priorityfilter)
    }
})

clearfilterRef.addEventListener("click",function(){
    ListofTickets(Tasks)
})

function getnextpriority(priorityStr){
    const priority = Number(priorityStr.split("p")[1])
    const priorities = [1,2,3,4]
    return `p${((priority % priorities.length) + 1)}`
}




function changepriority(domref){
    // Change in DOM
    const currentpriority = domref.getAttribute("data-priority")
    const nextpriority = getnextpriority(currentpriority)
    const currentcontainerRef = domref.closest(".Ticket-container");
    const TicketId = currentcontainerRef.getAttribute("data-id" , nextpriority);
    domref.setAttribute("data-priority",nextpriority)

    // Update in tasks (in memory)
    impactedTasks = Tasks.find(Task => TicketId === Task.id)
    impactedTasks.priority = nextpriority;
    // Update in localstorage
    updateTaskstolocalstorage(Tasks);
}