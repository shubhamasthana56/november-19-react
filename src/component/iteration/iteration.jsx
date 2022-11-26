const Iteration = ()=> {
    const arr = [{firstName: "shubham", lastName: "asthana", age:24 },{firstName: "abc", lastName: "bca", age:20 },
                 {firstName: "edf", lastName: "sdf", age:22 }]
    return (
        <div>
            <ul>
                {arr.map((user, index)=> {
                    return (
                        <div key={index}>
                             <li>{`${user.firstName} ${user.lastName}`}</li>
                             <li>{user.age}</li>
                        </div>
                       
                    )
                })}
            </ul>
            
        </div>
    )
}
export default Iteration;