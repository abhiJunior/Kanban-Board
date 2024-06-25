
var a = 24

// Hoisting concept


var g = "golbal scope"
//console.log("1 > ", g,o,i) here o showing not define.
function outer(){
    // for o this is the level thats why it is showing not define.
    var o = "outer scope"
    //console.log("2 >", g,o,i);
    function inner(){
        // hoisting level of i is this level i think so.
        var i = "inner scope"
        //console.log(" 3 >",g,o,i)
    }

    inner()

}

outer()


console.log(a,b);

a = 10;
var b = 20;


console.log(a)
function inner(){
    console.log(a,b);
    a = 10;
    var b = 20
}
console.log(a)

inner();






