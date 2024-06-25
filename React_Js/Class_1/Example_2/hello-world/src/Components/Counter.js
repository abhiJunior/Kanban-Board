import {useState} from 'react';



const Counter = (props) =>{
    const [counter,setCounter] = useState(props.initialValue)
    const inc = () =>{
        if (counter >= 10){
            return;
        }
        setCounter(counter + 1)
    }
    const dec = () =>{
        if (counter === 0){
            return;
        }
        setCounter(counter - 1)
    }

    return (
        <div className='counter'>
            <div>
                <h1>{props.counterName} Counter</h1>
                <button onClick={inc}>+</button>
                {counter}
                <button onClick={dec}>-</button>
            </div>
        </div>
    )
}

export default Counter;