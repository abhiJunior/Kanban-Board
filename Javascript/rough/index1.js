


class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    greet = function(){
        console.log("Hi", this.name ,"How are you")
    }
}

const swati = new Person("Swati",23)

swati.greet()



function message(messagelog,delay){
    setTimeout(function(){
        console.log(messagelog)
    },delay)
}



