import {useState} from "react";
const RandomName = () =>{
    const [id,setId] = useState(123123)
    const [name,SetName] = useState(768)
    const genName = () =>{
        const newId = Math.random()
        setId(newId)
        const newName = Math.random()
        SetName(newName)
    }
    return (
        <div className="random" onClick={genName} >
            <span >Id:{id}</span>
            <span>Name: xyz{name}</span>
        </div>
    )
}

export default RandomName;