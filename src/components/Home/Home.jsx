import React, { useContext } from 'react'
import classes from './Home.module.css'
import NewTasks from '../New Tasks/NewTasks'
import PreviewTasks from '../Preview Tasks/PreviewTasks'
import { dataStore } from '../globalScopeData/GlobalData'
import { FaSearch } from "react-icons/fa";
const Home = () => {
  const {tasks ,setTasks,setChange} = useContext(dataStore);
  React.useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(tasks));
  }, [tasks]);


  function updateTasks(updatedTasks) {
    setTasks(updatedTasks);
  }

  function saveHandler(todoTitle) {
    const newTodo = {
      id: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
      title: todoTitle,
      completed: false,
    }
    updateTasks([newTodo, ...tasks]);
  }

  function onDeleteHandler(id) {
    const update = tasks.filter(item => item.id !== id);
    updateTasks(update);
  }

  function updateTitle(updatedId, updatedTitle) {
    const update = tasks.map(item => {
      if (item.id === updatedId) {
        item.title = updatedTitle;
      }
      return item;
    });
    updateTasks(update);
  }

  function updateStatus(updatedId, status) {
    const update = tasks.map(item => {
      if (item.id === updatedId) {
        item.completed = status;
      }
      return item;
    });
    updateTasks(update);
  }

  return (
    <div className={classes.container}>
      <div className={classes.newTasks}>
        <div className={classes.nav}>
        <h1>New Tasks</h1>
        <button className={classes.search} onClick={()=>{setChange(true)}}  ><FaSearch/></button>
        </div>
        <NewTasks onSaveHandler={saveHandler} />
      </div>
      <div className={classes.previewTasks}>
        <div className={classes.heading}>
          <h1>Today's Tasks</h1>
          <h3>{new Date().toLocaleDateString()}</h3>
        </div>
        <PreviewTasks loadTasks={tasks} titleHandler={updateTitle} onDelete={onDeleteHandler} statusHandler={updateStatus} />
      </div>
    </div>
  )
}

export default Home;
