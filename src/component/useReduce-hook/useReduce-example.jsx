import { STATES } from "mongoose"
import { useReducer, useState } from "react"

const UseReducerExample = ()=> {
    const reducer = (currentValue, action)=> {
        switch(action.type) {
            case "IncrementByValue":
                return {...currentValue, counter: currentValue.counter + action.value}
            case "Decrement":
                return {...currentValue, counter: currentValue.counter - 1}
            case "Increment":
                return {...currentValue, counter: currentValue.counter + 1}
            case "changevalue": 
                return {...currentValue, updateBy: action.value}
            default:
                return currentValue
        }
    }
    const initialState = {counter: 0, updateBy: 0};
    //const [counter, setCounter] = useState(0);
    const [counterApp, dispatch] = useReducer(reducer, initialState);
    //const [inputValue, setInputValue] = useState("")
    //1 more state and 3 handlers
    return (
        <div>
            <button onClick={()=> {dispatch({type: "Increment"})}}>+</button>
            <div>{counterApp.counter}</div>
            <button onClick={()=> {dispatch({type: "Decrement"})}}>-</button>
            <input onChange={(e)=> {dispatch({type: "changevalue", value: e.target.value})}}/>
            <button onClick={()=> {dispatch({type: "IncrementByValue", value: parseInt(counterApp.updateBy)})}}>Increment By</button>
        </div>
    )
}
export default UseReducerExample