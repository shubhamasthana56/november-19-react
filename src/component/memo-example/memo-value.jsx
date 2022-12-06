import { useState, useEffect, useMemo } from "react";

const MemoValue = ()=> {
    let num = 0;
    const expensive = (num)=> {
        console.log("Calculating.......")
        for(let i=0;i<1000000000;i++) {
            
        }
        console.log("Calculated!")
    }

    const [count, setCount] = useState(0);
    const [test, setTest] = useState(false);
    // useEffect(()=> {}, []);
    useMemo(()=> {expensive(count)}, [count]);
    return (
        <>
        <button onClick={()=> {setCount(count + 1)}}>+</button>
        <button onClick={()=> {setTest(!test)}}>Re-render</button>
        <div>{count}</div>
        </>
    )
}
export default MemoValue;