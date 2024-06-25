// Trenary operators
//console.log("Start_from_here")
//var cartitems = 20



//console.log(cartitems) // undefined , 0 , null , false , "" are all fallsi values
//i//f (cartitems > 0){
//    console.log("Widget 1")
///}else {
//    console.log("Widget 2")
//}


//cartitems > 0 ?  console.log("Widget 1") : console.log("Widget 2")

// Expressions ? True : False



//if (cartitems > 10) {
//   console.log("widget 1")
//} else if (cartitems > 0) {
//    console.log("widget 2")
//} else {
//    console.log("widget 3")
//}

//switch(cartitems){
//    case 0:
//        console.log("widget 1")
//        break
//    case 20:
//        console.log("widget 2")
//        break
//    default:
//        console.log("widget 3")
////        break
//}

//console.log("start_from_here")
//var g = "global scope";
//console.log("1 ->", g , o, i);
//function outer(){
//    var o = "outer scope";
//    console.log("2 ->", g , o );
//    function inner(){
//        var i = "inner scope";
        //console.log("3 ->", g , o , i);
//    }
//inner();
//} 

//outer();
//-----------------------------Hoisting---------------------
// Hoisting occur in same scope not outside it
// But Anything which is not declared move to the global scope
// 
// var a;
//{ 
//    var b;
//    console.log(a,b);
//    a = 10;
//    var b = 20;
//}
//console.log(a, b);
//var a = 10;
//var b = 20;

// var a;
// var b;
//console.log(a,b);
//a = 10;
//b = 20;



// its will come in global scope
// var a;
//console.log("Start_from_here");

//function inner(){
    // var b;
//   console.log(a,b);
//    a = 10; // a is not declared so it will to the global scope
//    var b = 20; // b = 20;
///}

//inner()

//console.log("start_from_here");

//for (let i = 0; i < 5; i++){
 //   console.log("First >", i);
//}

//for(;i > 5; i++){
//    console.log("Second >",i);
//}

console.log("Sum",sum(2, 3));
// Named function
function sum(a , b){
    return a + b;
}

/*
// Anonymous function
var total = function(a,b){
    return a + b;
}


console.log("total",total(2,3))
*/
console.log("Start_from_here")
function sum(...args){
    
    let sum = 0;
    for (let i = 0; i < args.length;i++){
        sum += args[i]
    }
    return sum;
        
}   
console.log(sum(1,3,5,6,));