import {useState} from 'react';

const Like = () =>{
    console.log("Re-rendered")
    const [count , setCount] = useState(100) // its provide us two things in a form of array 1. var (inital) 2.method to update 1

    //let count1 = 100;
    // here handleLike is a reference which is given on event onClick.
    const handleLike = () =>{
        //count1 += 1
       // console.log(count1)
        setCount(count + 1) 
    }
    return (
        <div className="Like-wrapper">
            {/*<button onclick = "handlelike()">Like </button> {count} this how we execute in js*/ } 
            <button onClick={handleLike}>Like</button> - statecount {count} , {/*Normal counter {count1}*/ }
        </div>
    )
}

export default Like