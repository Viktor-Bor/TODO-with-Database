import './App.css';
import { useState } from 'react';
import { Login } from './authorisation/Login'
import { Registration } from './authorisation/Registration'
import { TaskList } from './To-Do/Task-List'
import { NewTask } from './To-Do/New-Task'  
import { Form } from "./authorisation/Form"


function App() {
const [activeRegistration, setActiveRegistration] = useState(true)
const [activeLogIn, setActiveLogIn] = useState(false)
const [newTask, setNewTask] = useState({value: ''}) //to omit console warning,init. state.
const [allTask, setAllTask] = useState([])



return (
<div className="App">
 <Form 
Login={Login} 
Registration={Registration}
activeRegistration={activeRegistration} 
setActiveRegistration={setActiveRegistration}
activeLogIn={activeLogIn}
setActiveLogIn={setActiveLogIn}
/>

 <NewTask 
 newTask={newTask}
 setNewTask={setNewTask}
 setAllTask={setAllTask}
 />

 <TaskList 
 allTask={allTask}
 setAllTask={setAllTask}
 newTask={newTask}
 />
 

    </div>
  );
}

export default App;


 /* <Registration 
 activeRegistration={activeRegistration} 
 setActiveRegistration={setActiveRegistration}
 activeLogIn={activeLogIn}
 setActiveLogIn={setActiveLogIn}
 closeForm={closeForm} />

 <Login 
 activeLogIn={activeLogIn}
 setActiveLogIn={setActiveLogIn}
 activeRegistration={activeRegistration}
 setActiveRegistration={setActiveRegistration}
 closeForm={closeForm} /> */