class Car{
    constructor(model,color){
        this.model = model,
        this.color = color,
        this.getColor = function(){
            return this.color;
        }
    }
    getModel(){                //              
        return this.model;  
    }
    getPrototype(){
        return "this is a prototype of car"
    }
    static getDetail = function(){    // not dependent on this so, it directly called by class name as a normal function.static method do not carryforward on instances
        console.log("Get_Detail")
    }
    static getArea = function(radius){
        return 3.14*radius*radius;
    }

}


class SuperCar extends Car{
    
    constructor(price,features,model,color){
        super(model,color)
        this.price = price
        this.features = features
        
    }
    getPriceonroad(){
        return this.price + 100000
    }
}

const Mustang = new SuperCar(2000000,["f1","f2","f3"],"Mustang_GT","Yellow")
