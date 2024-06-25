

var obj3 = {
    name : "Chirag Goel",
    dob : "13/11/XXXX",
    married : true,
    address : {
        pincode : 110043,
        city : "Delhi"
    },
    greet : function(){
        console.log("Hi , I am Abhishek's Instructor")
    }


}

/*
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
*/
var key = Object.keys(obj3)

for (let i = 0;i < key.length; i++){
    console.log(key[i],":",obj3[key[i]])
}


console.log(obj3["dob"]);


console.log(obj3.greet());


// -------------------------------------------------UPDATE OPERATION------------------------------



obj3.name = "Abhishek Kumar"

//console.log(obj3)

delete obj3.married

console.log(obj3)