
const list = [
    {
        id : 1,
        name:"Product 1"
    },
    {
        id : 2,
        name:"Product 2"
    },
    {
        id : 3,
        name:"Product 3"
    },{
        id : 4,
        name:"Product 4"
    },
]

const myfetch = function(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(list)
        },5000)
    })
}

myfetch()
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })