import React, { useContext, useEffect, useState } from 'react'
import { dataStore } from '../globalScopeData/GlobalData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import PreviewTasks from '../Preview Tasks/PreviewTasks'
import classes from '../New Tasks/Newtasks.module.css';
const Search = () => {
    const {search , setSearch, tasks,setChange ,setTasks} = useContext(dataStore);
    const [task , setTask] = useState('');
    useEffect(()=>{
      console.log(search);
    },[]);
    const findData = ()=>{
      const val = tasks.filter((item) => {
        return item.title.toLowerCase().includes(task.toLowerCase());
    });
    if(task){
      setSearch(val);
    }else{
      setSearch([]);
    }    
    }

    const searchData = (e) => {
      e.preventDefault();
      findData();
       
    }
    
    
   
    
    function updateTasks(updatedTasks) {
      setTasks(updatedTasks);
      
    }
  
   
  
    function onDeleteHandler(id) {
      const updatedTasks = tasks.filter(item => item.id !== id);
      updateTasks(updatedTasks);
      
      const updatedSearch = search.filter(item => item.id !== id);
      setSearch(updatedSearch);
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
      findData();
    }
  

  return (
    
      <div className={classes.container}>
      <div className={classes.searchTab}>
       <button
                     onClick={()=>{setChange(false)}}
                    className={classes.new_task_submit}
                >
                    <FontAwesomeIcon
                      
                        icon={faCheckCircle}
                        className={classes.icon} />
                  Go to  Add Task
                </button>
      <div>
            <form onSubmit={searchData}
                className={classes.new_task_form}>
                <input
                    type="text"
                    className={classes.new_task_input}
                    placeholder="Search tasks "
                    onChange={(e)=>{setTask(e.target.value); }}
                    value={task}
                    autoFocus
                />
                <button
                    type="submit"
                    className={classes.new_task_submit}
                >
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={classes.icon} />
                    Search
                </button>
            </form>
        </div>
      </div>
      <PreviewTasks loadTasks={search} titleHandler={updateTitle} onDelete={onDeleteHandler} statusHandler={updateStatus} />
    </div>
  )
}

export default Search
