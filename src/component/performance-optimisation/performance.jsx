import { useCallback, useState } from "react"
import PerformanceChild from "./performance-child"
const Performance = ()=> {
    const [list, setList] = useState([]);
    const [listItem, setListItem] = useState("");
    const [heading, setHeading] = useState("I am old heading");
    const handleHeading =  useCallback(()=> {
        return heading;
    }, [heading])
  
    return (
        <>
        <input onChange={(e)=> {setListItem(e.target.value)}} value={listItem}></input>
        <button onClick={()=> {setList([...list, listItem]); setListItem("");}}>Add to list</button>
        <button onClick={()=> {setHeading("I am updated heading")}}>Update Heading</button>
        {list.map((value, key)=> {
            return (
                <div key={key}>{value}</div>
            )
        })}
        
        <PerformanceChild heading={handleHeading}/>
        </>
    )
}
export default Performance;