console.log(this)

// In Node this when their is not object(Gf) Its always point the golbal object.

// IN case of Browser this point to the window object.
/*
let obj = {
    name : "Abhishek",
    profession : "Software Engineer",
    city : "Delhi",
    getmethod : function(){
        console.log(this) // here Gf is there so it point Gf (obj)
    }
}

obj.getmethod() // here by obj called this (getmethod) so it point to obj.
*/

// this always going to be a object

let obj1 = {
    name : "Abhishek",
    profession : "Software Engineer",
    city : "Delhi",
    getmethod : function(){
        function test(){
            console.log(this)
        }
        test() // here test is not called by obj so its point the golbal.
        
    }   
}

 //obj1.getmethod() // test is not called by obj so it going to point it to the global level


let obj = {
    name : "Abhishek",
    profession : "Software Engineer",
    city : "Delhi",
    getmethod : function(){
        console.log(this) // here Gf is there so it point Gf (obj)
    }
}

let obj3getthis = obj.getmethod
obj3getthis() // here also obj3getthis not called by Gf (object) so its going
// to point the window in browser and global in node js.

// obj3getthis not called by any object

// root level object => window | golbal
// this => object(root | callee)
