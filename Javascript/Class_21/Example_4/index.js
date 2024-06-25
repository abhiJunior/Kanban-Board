const obj = {
    a : 10,
    b : 20,
    sum : function(){
        return this.a + this.b
    }
}

//console.log(obj.sum()) 
    
// sum has its gf as obj is calling it

const sumRef = obj.sum
//console.log(sumRef()) // here it is go golbal and check for a and b which are not define(undefine).
// undefine + undefine = NaN

const obj1 = {
    a : 50,
    b : 50,
}
console.log(sumRef.call(obj1))  // here sumRef (this) is called w.r.t to obj1 which exceute according to obj1
