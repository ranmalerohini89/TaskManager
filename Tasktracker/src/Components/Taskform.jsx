import React, { useState } from 'react'

export default function Taskform( {addTask} ) {
    const [task, setTask] = useState("");
   const[priority, setPriority] = useState("Medium");
   const[categary, setCategary] = useState("General");

   const handlesubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority, categary, completed: false});

    //reset
    setTask('');
    setPriority('medium');
    setCategary("General");

   }
 return (
   <form className='task-form' onSubmit={handlesubmit}>
    <div id='inp'>
         <input type='text' placeholder='Enter your task' onChange={(e) =>setTask(e.target.value)} value={task}/>
      <span><button type='submit'>Add Task</button></span>
     <h1>{task} {priority} {categary}</h1>
    </div>

    <div id='btns'>
        <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
            <option value="high">High</option>
             <option value="medium">Medium</option>
              <option value="low">Low</option>
        </select>
         <select onChange={(e)=>setCategary(e.target.value)} value={categary}>
            <option value="high">General</option>
             <option value="work">Work</option>
              <option value="personal">Personal</option>
        </select>
    </div>
   </form>
  )
}
