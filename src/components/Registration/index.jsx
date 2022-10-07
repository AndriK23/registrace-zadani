import React, { useState } from "react";

const Registration = () => {

const [user,setUser] = useState({
    username:'',
    email: '',
    password: '',
    passwordConfirm: '',
})




const handleSubmit = (event) => {   
        event.preventDefault() 
        console.log(user)
}


 const handleBlur =(event) => {
    if (user.username === '' && user.email.includes('@')) {
    let cutUsername = user.email.split("@")[0];
    setUser({...user, username: cutUsername})
    console.log(cutUsername)
 }
}

 

// 

    return(
        <>
        <form onSubmit ={handleSubmit}>
        <input 
            type = 'text' 
            placeholder ='Username' 
            id = 'Username'
            onChange={(e) => setUser({...user, username: e.target.value})}    
            value={user.username}
        /> 
        <br />

        <input 
            type = 'email' 
            placeholder ='Email' 
            id="Email"
            required
            onChange={(e) => setUser({...user, email: e.target.value})} 
            onBlur ={handleBlur} 
            value={user.email}
        /> 
        <br />

        <input 
            type = 'text' 
            placeholder ='Password' 
            id='Password'
            onChange={(e) => setUser({...user, password: e.target.value})}
            value={user.password}
        /> 
        <br />
        
        <input 
            type = 'text' 
            placeholder ='Password Confirm' 
            id='Password Confirm'
            required
            onChange={(e) => setUser({...user, passwordConfirm: e.target.value}) }
            value={user.passwordConfirm}
        />

        <br />
        <button type='submit'> Register </button>
        </form> 
        </>
    )
}

export default Registration;

//onMouseOver={extractUsername}