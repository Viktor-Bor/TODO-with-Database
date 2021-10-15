import React from 'react';

export function TaskList({ allTask, setAllTask }) {

    function noTodosMessege(){
        if (allTask.length === 0){
            return <h3>Not even todos yet :(</h3>
      }
}

    function deleteTodo(task){
        setAllTask((prev) => 
        prev.filter(tastToDelete => tastToDelete.id !== task.id))
}

    function completeTodo(idToCheck){
    const updateTaskList = allTask.map(task => {
        if(task.id === idToCheck) {
            task.isDone = !task.isDone
        }
        return task
     })
        setAllTask(updateTaskList)
}


    return (
        <div className="task-list">
            <h2>To do:</h2>
            <ul>
                {noTodosMessege()}
                {allTask.map((task) => {
                    return <li key={task.key}>
                        <input 
                        type="checkbox" 
                        onClick={() => completeTodo(task.id)}/>
                        <p className={task.isDone ? 'check-up active' : 'check-up'}>
                        {task.todoTitle}
                        </p>
                        <small>{task.id}
                        <i onClick={() => deleteTodo(task)}>&times;</i>
                        </small>
                     </li>
                 })
                }
            </ul>
        </div>
    )
}