
var obj = {
    a : 10,
    b : 20,
    sum : function(){
        this.a + this.b
    }
}


console.log(obj.sum()) //30
const obj1 = obj.sum
console.log(obj1) // reference error




/*
function sum(a,b){
    return a + b
}

console.log(sum(2,3)); 

// below code will be converted like this
// var a;
// var b;
// they are declared 
// and at this point they are undefine
// undefine + undefine = NaN

console.log(sum(a,b)); // NaN

var a = 2;
var b = 4;
*/


// object and array always going to store in heap
/*
while(true){
    console.log("c")
}

console.log("a")
console.log('b');
*/


for (let i = 0; i < 10 ; i += 1){
    console.log(i)
}


while(i == 9 ){
    console.log("its running while loop also")
}