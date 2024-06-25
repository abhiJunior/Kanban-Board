function Car(model,color){  // This is a constructor function.
    this.model = model,
    this.color = color,
    this.getColor = function(){
        return this.color
    }


}
Car.prototype.getModel = function(){  // prototype does not copied when instance or object is created
                                        
    return this.model  
}
const BMW = new Car("BMW","White")
const Mer = new Car("Mercedes","Purple")

const Harrier = new Car("Harrier","Black")

class Car1{
    constructor(model,color){
        this.model = model,
        this.color = color,
        this.getColor = function(){
            return this.color;
        }
    }
    getModel(){                              
        return this.model;  
    }

}

const Punch = new Car1("Punch","Red")
