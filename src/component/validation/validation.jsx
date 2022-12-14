import { useState } from "react"
const Validation = ()=> {
    const [form, setForm] = useState({username: "", email: "", password: "", confirmPassword: ""});
    const [error, setError] = useState({username:{isValid: true, message: ""}, email:{isValid: true, message: ""},
    password:{isValid: true, message: ""}, confirmPassword:{isValid: true, message: ""}})
    const handleSubmit = (event)=> {
        event.preventDefault();
        alert("Form Submitted Successfull");
        setForm({username: "", email: "", password: "", confirmPassword: ""})
    }
    const checkErrors= (type)=> {
        switch(type) {
            case "username":
                if(form.username.length > 8 || form.username.length < 6 ) {
                    setError({...error, username:{isValid: false,message: "username should have min lenght of 6 and max length of 8"}})
                } else {
                    setError({...error, username:{isValid: true,message: ""}})
                }
                break;
            case "email":
                break;
            case "password":
                break;
            case "confirmPassword":
                if(form.password !== form.confirmPassword) {

                } else {
                    
                }
                break;
        }
    }
    const isSubmitValid = form.username.length && form.email.length &&
    form.password.length && form.confirmPassword.length;
    return (
    <div>
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" onChange={(event)=> {setForm({...form, username: event.target.value
                })}} onBlur={(event)=> {checkErrors("username")}} value={form.username}/>
                {!error.username.isValid ? <div style={{color: "red"}}>{error.username.message}</div>: null}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(event)=> {setForm({...form, email: event.target.value
                })}} onBlur={(event)=> {checkErrors("email")}} value={form.email}/>
            </div>
            <div>
                <label htmlFor="password">Password<span style={{color: "red"}}>*</span></label>
                <input type="password" id="password" onChange={(event)=> {setForm({...form, password: event.target.value
                })}} onBlur={(event)=> {checkErrors("password")}} value={form.password}/>
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" onChange={(event)=> {setForm({...form, confirmPassword: event.target.value
                })}} onBlur={(event)=> {checkErrors("confirmPassword")}} value={form.confirmPassword}/>
            </div>
            <button type="submit" onClick={handleSubmit} disabled={isSubmitValid===0 ? true : false}>Submit</button>
        </form>
    </div>
    )
}
export default Validation;