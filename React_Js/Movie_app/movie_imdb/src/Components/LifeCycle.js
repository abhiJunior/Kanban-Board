
import {useEffect, useState} from "react";


const LifeCycle = () =>{

    const [count,setcount] = useState(0);
    const [buttonClickcount,setButtonCount] = useState(0)


    useEffect(()=>{
        console.log("Component Did Mount");
        const timerid = setInterval(()=>{
            setcount((previousValue)=>{
                console.log(previousValue)
                return previousValue + 1
            });

        },1000);
        return () =>{
            console.log("Component Did Unmount")
            clearInterval(timerid);
        }
    },[]);

    useEffect(()=>{
        console.log("Component Did Update")
    })
    return (
        <div>
            <h1>React Life Cycle</h1>
            <h2>Why it not allowing write there something</h2>
            <h3>Count : {count}</h3>
            <p>Now its working prefectly find</p>
            <div>
                <button onClick={()=>setButtonCount(buttonClickcount + 1)}>ADD</button>
                {buttonClickcount}
            </div>
        </div>  
    )
}

export default LifeCycle;