import { useState } from "react";

let num = 0;

function Todoapp (){
    const [newitem , setNewitem] = useState("")
    const [todos, setTodos] = useState([])

    function handleinput(inputvalue){
        setNewitem(inputvalue);
    }

    function handleclick(event){
        // event.preventdefault()
        num = num + 1;
        setTodos(prevtodos => [...prevtodos, {
            id:num,
            title : newitem,
            completed: false,
        }])
        
        setNewitem("");
        console.log(todos)
    }

    function handlecheck(id , completed){
        setTodos(prevtodos =>
            prevtodos.map((todoitem) => {
                if(todoitem.id === id){
                    return {
                        ...todoitem,
                        completed: completed
                    }
                }
                else return todoitem
            })
        )
        console.log(todos)
    }

    function handledelete(id){
        setTodos(prevtodos =>
            prevtodos.filter((todoitem) => {
                if(todoitem.id != id){
                    return true;
                }
            })
        )
    }
    

    return(
        <>
        <h3>To Do App</h3>
        <div className="header">
            <input type="text" value={newitem} onChange={(e) => handleinput(e.target.value)}></input>
            <button type="submit" onClick={(e) => handleclick(e)}>Add Event</button>
        </div>

        <div className="body">
            <br/><br/>
            <h5>To do list</h5>

            {
                todos.map((todoitem) => {
                    return(
                        <div className="todo_card" key={todoitem.id}>
                            
                            <input type="checkbox" onClick={(e) => {handlecheck(todoitem.id, e.target.checked)}}></input>
                            <span>{todoitem.title}</span>
                            
                            <button onClick={(e) => {handledelete(todoitem.id)}}>Delete</button>
                        </div>
                    )
                })
            }

        </div>

        </>

    )
}

export default Todoapp;