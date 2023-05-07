import { useState, useEffect  } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"


const LOCAL_STORAGE_KEY = "todo:savedTasks"

function App() {
  const [tasks, setTasks] = useState([]);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(saved)
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []) 

  function addTask(taskTitle) { // criar tarefa
    setTasksAndSave([
      ...tasks, // manter valores prévios
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]) ;
  }

  function toogleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasksAndSave(newTasks);
  }

  const editTask = (taskId, editedTitle) => {
    var tasksArray = [...tasks]
    tasksArray.splice(taskId, 1, {title:editedTitle, taskId: taskId})
    setTasks(tasksArray)
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks)
  }


  return (
    <>
      <Header handleAddTask={addTask}/> 
      <Tasks 
        tasks={tasks}
        onComplete={toogleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  )
}

export default App
