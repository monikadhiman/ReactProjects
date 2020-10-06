import React from 'react';
const ToDoList =(props)=>{
   
    return (
      <>
      <div>
          
      </div>
        <button type="button" className="btninputdel" onClick={()=>{
            props.onSelect(props.id);
        }}>
          x
        </button>
        <li>{props.txt}</li>
      </>
    );
    
}
export default ToDoList;
