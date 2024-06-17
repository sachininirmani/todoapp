import { useState, useEffect } from "react";

function Hookfunc () {
    var [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount((prevcount) => prevcount - 1)
    }

    const incrementCount = () => {
        setCount((prevcount) => prevcount + 1)
    }
    
    var [user , setUser] = useState("student");
    useEffect(() => {
        console.log("%s is clicked", user);
    }, [user])
  
    return(
        <div>
            <br/>
            <p>hello</p>
            <button onClick={decrementCount}> - </button>
            <span> {count} </span>
            <button onClick={incrementCount}> + </button>

            <br/><br/>
            <button onClick={() => setUser("student")}>student</button>
            <button onClick={() => setUser("cleaner")}>cleaner</button>
            <button onClick={() => setUser("lecturer")}>lecturer</button>

            <span>{user}</span>

        </div>
    )
}

export default Hookfunc;