import { useState } from "react";

const IterationPractise2 = ()=> {
    const [name, setName] = useState("");
    const [marks, setMarks] = useState(0);
    const [tableData, setTableData] = useState([]);
    const handleAdd = ()=> {
        setTableData([...tableData, {name: name, marks: marks, id: ""}])
    }
    const handleDelete = (deleteValue)=> {
        //filter it out
        const newTableData = tableData.filter((data)=> {
            return data.name !== deleteValue.name
        });
        setTableData(newTableData);
    }
    return (
        <div>
            <input value={name} onChange={(e)=> {setName(e.target.value)}}  />
            <input value={marks} onChange={(e)=> {setMarks(e.target.value)}}/>
            <button onClick={handleAdd}>Add Row</button>
            <table>
               
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Marks</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {tableData.map((tableVal, index)=> {
                           return (
                                <tr key={index}>
                                    <td>{tableVal.name}</td>
                                    <td>{tableVal.marks}</td>
                                    <button onClick={()=> {handleDelete(tableVal)}}>delete</button>
                                </tr>
                           )
                          
                       })}
                   </tbody>
                    
            </table>
        </div>
    )
}
export default IterationPractise2;