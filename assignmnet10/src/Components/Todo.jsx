import React,{useState} from "react";

const Todo = () =>{
    const [value,setValue] = useState("");
    const [items,setItems] = useState([]);
    const handleInput = (e) =>{
        setValue(e.target.value);
    }
    const setInput = () =>{
  
            return(
                setItems([...items,value])
                
            )
      
    }
    return(
        <>
        <h2>ToDo List</h2>
        <br />
        <input 
        type="text"
        onChange={handleInput}
        placeholder = "Add-items-here"
        
        />
        <br />
        <button onClick={setInput}>+</button>
        <ol>
            {
               items.map((val,index)=>{
                return(
                    <li>{val}</li>
                )
               })
            }
        </ol>
        </>
    )
};
export default Todo;