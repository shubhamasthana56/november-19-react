import { useState } from "react"
import "./practise.css";

const IterationPractise = ()=> {
    const [item, setItem] = useState("");
    const [category, setCategory] = useState("");
    const [age, setAge] = useState(0);
    const [userList, setUserList] = useState([]);
    
    const handleItemAdd = ()=> {
        if(age > 18) {
            setUserList([...userList,{name: item, age: age, category: category}]);
        }
        
        setItem("");
        setAge(0);
        setCategory("");

    }
    return (
        <div>
            {(age !==0 && age < 18) ? <div>You Are minor</div> : null}
            <input onChange={(event)=> {setItem(event.target.value)}} value={item} />
            <input type="number" onChange={(event)=> {setAge(parseInt(event.target.value))}} value={age} />
            <select onChange={(event)=> {setCategory(event.target.value)}} value={category}>
                <option>Choose Your Category</option>
                <option value="veg">Veg</option>
                <option value="nonveg">Non-Veg</option>
            </select>
            <button onClick={handleItemAdd}>Add Item</button>
            <ul>
                {userList.map((user, index)=> {
                    return (
                        <div key={index}>
                            <li>{user.name}</li>
                        <li >{user.age}</li>
                        <li className={(user.category==="veg") ? "veg": "nonveg"}>{user.category}</li>
                        </div>
                        
                    )
                })}
            </ul>
        </div>
    )
}
export default IterationPractise;