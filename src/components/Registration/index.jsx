import React, { useState } from "react";

const Registration = () => {

const [user,setUser] = useState({
    username:'',
    email: '',
    password: '',
    passwordConfirm: '',
})


//const handleChange = (event) => {
//    setUser({username: event.target.value, email: event.target.value, 
//        password:event.target.value, passwordConfirm: event.target.value  })
//}  


const handleClick = (event) => {
        
        event.preventDefault() 
        console.log({user}) 
      
}


//function isValidEmail(email) {
//    return /\S+@\S+\.\S+/.test(email);
//}

// if (user.username === '' && !isValidEmail)

  const extractUsername = () => {       
    if(!user.username) {
        let cutUsername = user.email.split("@")[0];
        setUser({...user, username: cutUsername})
    } 
 }


    return(
        <>
        <form>
        <input 
            type = 'text' 
            placeholder ='Username' 
            id = 'Username'
            onChange={(e) => setUser({...user, username: e.target.value})}    
        /> 
        <br />

        <input 
            type = 'email' 
            placeholder ='Email' 
            id="Email"
            required
            onChange={(e) => setUser({...user, email: e.target.value})} /> 
        <br />

        <input 
            type = 'text' 
            placeholder ='Password' 
            id='Password'
            onChange={(e) => setUser({...user, password: e.target.value})}
        /> 
        <br />
        
        <input 
            type = 'text' 
            placeholder ='Password Confirm' 
            id='Password Confirm'
            required
            onChange={(e) => setUser({...user, passwordConfirm: e.target.value}) }
        />

        <br />
        <button onClick = {handleClick} onMouseOver={extractUsername}> Register </button>
        </form> 
        </>
    )
}

export default Registration;