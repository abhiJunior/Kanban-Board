function Person(name , course){  // constructor function name or First letter always in capital letters.
    this.name = name;
    this.course = course;
    this.getName = function(){
        return this.name;
    }
    this.getCourse = function(){
        return this.course;
    }


}

const Abhishek = new Person("Abhishek","FullStack") // here new keyword helps to create object from constructor function.

const Swati = new Person("Swati","FullStack");

console.log(Abhishek.getName());
console.log(Swati.getName())