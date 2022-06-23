import React, { useEffect, useState} from "react";


const UseStateHookExample = () => {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(()=> {
        console.log("data changed on useffect!!!")
    }, [counter2]);

    useEffect(()=>{
        return () =>{
            console.log("unmounting!!!")
        }
    })
    const handleClick = (event) => {

        setCounter(counter+1)
    }

    return (
        <div>
            <button onClick={handleClick}>Counter</button>
            <button onClick={()=>setCounter2(counter2+1)}>Decrease</button>
            <p>{counter}</p>
            <p>{counter2}</p>
        </div>
    )
}

export default UseStateHookExample;