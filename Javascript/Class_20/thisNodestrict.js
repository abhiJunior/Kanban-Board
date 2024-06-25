"use strict";

// In Strict mode there are no crush or crush is not allowed.

//console.log(this);

// if object is callee than , it refer the object, previously as in case of window strict.

function test(){    // no GF so , its not going the crush as crush is not allowed in strict mode.

    console.log(this)
}

test();

/*
let obj = {
    name : "Vinay",
    city : "Patna",
    getthat : function(){
        function fn(){
            console.log(this)
        }
        fn()
        
    }
}

obj.getthat()
*/