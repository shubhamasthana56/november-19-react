import { useRef } from "react"

const RefComplex = ()=> {
    const form = useRef({username: "", password: ""})
    return (
        <>
            <input onChange={(e)=> {form.current.username = e.target.value}}/>
            <input type="password" onChange={(e)=> {form.current.password = e.target.value}}/>
            <button onClick={()=> {debugger; console.log(form)}}>Login</button>
        </>
    )
}
export default RefComplex