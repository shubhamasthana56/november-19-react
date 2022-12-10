import { useRef } from "react";

const Login = ()=> {
    const loginRef = useRef({username: "", password: ""});
    return (
        <>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e)=> {loginRef.current.username = e.target.value}}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e)=> {loginRef.current.password = e.target.value}}></input>
            </div>
            <button onClick={()=> {}}>Login</button>
        </>
    )
}
export default Login;