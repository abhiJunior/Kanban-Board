/*
const usernameref = document.querySelector(".form input.username ")
const obj = {};
const buttonref = document.querySelector(".form button");
const emailref = document.querySelector(".form input.email");

usernameref.addEventListener("keyup",function(e){
    obj.name = e.target.value;
    
    //console.log(e.target.value);
    const previewref = document.querySelector(".preview");
    previewref.innerText = e.target.value;
   
});

emailref.addEventListener("keyup",function(e){
    obj.email = e.target.value;
});
*/
/*
// Why is this not working properly
const formref = document.querySelector(".form ");
function getelementform(){
    let n = length.formref[0]
    for (let i = 0 ; i < n ; i ++){
        console.log(formref.elements[i].name , formref.elements[i].value);
    };
    
};
*/
const formref = document.querySelector(".form ");
formref.addEventListener("submit",function(e){
    e.preventDefault();
    const result = [...formref.elements].reduce(function(acc,item){
        if (item.name){
            acc[item.name] = item.value;
        }
        return acc;
    },{});
    console.log(result);
});

