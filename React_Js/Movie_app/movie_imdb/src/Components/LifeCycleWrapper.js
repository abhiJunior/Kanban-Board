import LifeCycle from "./LifeCycle";

const LifeCycleWrapper = () =>{

    const [isLifeCyclevisible,setLifeCyclevisibility] = useState(false);

    return (
        <div>
            {isLifeCyclevisible ? <LifeCycle/> : null}
            <input type='checkbox' onChange={() => setLifeCyclevisibility(!isLifeCyclevisible)}/> setVisibility
        </div>
    )
}

export default LifeCycleWrapper;