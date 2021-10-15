import React from 'react';

export function NewTask({setNewTask, newTask, setAllTask}) {

    function handlerChange({target}){
    // const todo = target.value
    // const name = target.name
    const { value, name } = target
    // (prev) - ???
    setNewTask({id: new Date().toLocaleString(), [name]: value, isDone: false, key: Math.random()})
 }

    function addToDo(){
        setAllTask((prev) => [ ...prev, newTask ])
        setNewTask({value: ''})
    }


    return (
        <div className="new-task">
        <form onSubmit={e => e.preventDefault()}>
            <input onChange={handlerChange}
            name='todoTitle'
            value={newTask.todoTitle || ""}
            type="search"
            placeholder="New task..."
            />
           <button className="add-todo" type="submit" disabled={newTask.value === '' ? true : false} onClick={() => addToDo()}>+</button>
        </form>
        
        </div>
    )
}