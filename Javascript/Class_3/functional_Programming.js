







var strarry = ["My","Name","is","Abhishek"]

function sumDeclarative(){
    var result = strarry.reduce(function(acc,item){
        acc += item + " "
        return acc
    }," ")

    console.log(result)

}


sumDeclarative()

