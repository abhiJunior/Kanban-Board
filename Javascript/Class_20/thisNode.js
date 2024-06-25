//console.log(this);

// if object is callee than , it refer the object, previously as in case of window.
/*
function test(){    // Concept remains same its just refering to the golbal in place of window in node.js.

    console.log(this)
}

test();
*/

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