const Todo = () =>{
    const list = ["item 1","item 2","item 3","item 4"]

    const handleAdd = () =>{
        console.log("triggered")
    }
    
    const handleClick = () =>{

    }

    return (
        <div className="to-do">
            <h1>To Do List</h1>
            <input onChange={handleAdd} placeholder="Add item" type="text" />
            <button onClick={handleClick}>Add</button>
            <ul>
                {
                    list.map((item)=>{
                        return(<li>item</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Todo;