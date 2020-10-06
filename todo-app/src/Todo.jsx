import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './Todo.css';
const Todo=()=>{
    const [inputItem, setinputItem]=useState("");
     const [item, setItem]=useState([]);
    const inputEvent=(event)=>{
        console.log(event.target.value);
        const val=event.target.value;
        setinputItem(val);
    }
    const clickEvent=()=>{
        setItem((oldItem)=>{
            return [...oldItem,inputItem];
        })
        setinputItem("");
    }
     const delItem = (Id) => {
       console.log("deleted");
       setItem((oldItem)=>{
         return oldItem.filter((arrayElement, index ) =>{
           return index!==Id
         }
       )})
     };
    return (
      <React.Fragment>
        <div className="main_div">
          <div className="center_div">
            <h2 className="headingh2">Todo List</h2>
            <br />
            <input
              type="text"
              className="textinput"
              placeholder="Enter todo item"
              onChange={inputEvent}
              value={inputItem}
            />
            <button type="button" className="btninput" onClick={clickEvent}>
              +
            </button>
            <br />
            <hr />
            <ul style={{textAlign: "left"}}>
              {/* <li>{inputItem}</li> */}

              {item.map((itemval, index) => {
                return <ToDoList key={index} id={index} txt={itemval} onSelect={delItem}/>
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
}
    export default Todo;
