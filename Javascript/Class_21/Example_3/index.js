function Car(model,color){  // constructor based approach
    this.model = model;
    this.color = color;
    this.getColor = function(){
        return this.color
    }
}

Car.prototype.getModel = function(){
    return this.model
}



function SuperCar(price,features,model,color){
    Car.call(this,model,color)
    this.price = price;
    this.features = features;
}

SuperCar.prototype = Object.create(Car.prototype);


SuperCar.prototype.getPriceonroad = function(){
    return this.price + 100000
}


const Lamborgini = new SuperCar("2000000",["f1","f2","f3"],"X","yellow")