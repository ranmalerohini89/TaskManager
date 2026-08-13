import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {

const[tasks, setTasks] = useState([]);


useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks]);

 const addTask = (task) => {
  setTasks([...tasks, task])
 } 

 const updateTask = (updatedTask, index) => {
  const newTasks = [...tasks];
 newTasks[index] = updatedTask;
 setTasks(newTasks);
 }

const deleteTask = (index) => {
  setTasks(tasks.filter((_ , i) => i!= index))

 }

  const clearTask = () => {
    setTasks([]);
  }
 return (
    <div> 
      <h1>Task Tracker</h1>
      <h4><i>The friendly task manager</i></h4>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks={tasks}/>

   {tasks.length > 0 &&
   (<button onClick={clearTask} className='clear-btn' > Clear All Tasks</button>)}

    </div>
  )
}
