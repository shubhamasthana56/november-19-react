import { useState } from "react";
const Counter = ()=> {
    const [count, updateCount] = useState(0)
    //states are immutable
    const handleIncrement = ()=> {
        //update count value
        //0
        updateCount((prevCount)=> {
            console.log(prevCount, "Prev")
            return prevCount + 1
        });
        updateCount(
            (prevCount)=> {
                return prevCount + 1
            }
        );
        //count++
        //count = count + 1;
        console.log(count)
    }
    const handleDecrement = ()=> {
        updateCount(count-1);
        console.log(count)
    }
    return (
        <div>
            <button onClick={handleIncrement}> + </button>
                <div>{count}</div>
            <button onClick={handleDecrement}> - </button>
            <button onClick={()=> {updateCount(count * 2)}}>Multiply by 2</button>
        </div>
    )
}
export default Counter;