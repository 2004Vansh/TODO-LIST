import React, {useState} from "react";

function TODO(){
    const [tasks , SetTask] = useState([]);

    function handleTask(event){
        const newTask = document.getElementById("input-field").value;
        document.getElementById("input-field").value='';
        if(newTask.trim()!==''){
        SetTask([...tasks,newTask]);
        } 
    }

    function handleDelete(index){
        SetTask(tasks.filter((_,i)=>i!==index));
    }

    function handleUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]];
            SetTask(updatedTasks);
        }
    }

    function handleDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            SetTask(updatedTasks);
        }
    }

    return(<>
    <div id="to-do-div">
    <h1>TO-DO LIST</h1>
    <div>
            <input type="text" placeholder="Enter Your Task" id="input-field"/>
            <button onClick={handleTask} className="add-btn">Add</button>
        </div>


       <ol>
        {tasks.map((task,index)=><li key={index}> <span className="text">{task} </span>
            <button onClick={()=>handleDelete(index)} className="del-btn">❌</button>
            <button onClick={()=>handleUp(index)} className="up-btn">⬆️</button> 
            <button onClick={()=>handleDown(index)} className="down-btn">⤵️</button>
            
            </li>)} 
        
        </ol>
       
    </div>
    
    </>)
}

export default TODO;