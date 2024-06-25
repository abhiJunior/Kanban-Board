const monthref = document.querySelector(".buttons .month-button");

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
]
const monframentref = document.createDocumentFragment();
function createmonth(){
    months.forEach((item)=>{
        const optionref = document.createElement("option");
        optionref.innerText = item;
        monframentref.appendChild(optionref);


    })
}

createmonth();
monthref.appendChild(monframentref)