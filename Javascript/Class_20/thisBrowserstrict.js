"use strict";
/*
function test(){
    console.log(this)
}
test()  // In strict mode there is no more crushes.
*/
let obj = {
    name : "Abhishek",
    city : "Delhi",
    professon : "Software Engineer",
    getthis : function(){
        console.log(this)
    }
}
let obj1 = {
    name :"Swati",
    city : "Delhi"
}
obj1.newkey = obj.getthis;
obj1.newkey();

