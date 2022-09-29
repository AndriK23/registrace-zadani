import React, { useState } from "react";

const Registration = () => {

const [user,setUser] = useState({
    username:'',
    email: '',
    password: '',
    passwordConfirm: '',
})



const handleClick = (event) => {
        
        event.preventDefault() 
        console.log({user}) 
      
}


//  const extractUsername = () => {       
//    if(!user.username) {
//        let cutUsername = user.email.split("@")[0];
//        setUser({...user, username: cutUsername})
//    } 
// }

 const handleBlur =(event) => {
    let cutUsername = user.email.split("@")[0];
    setUser({...user, username: cutUsername})
    console.log(cutUsername)
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
            onChange={(e) => setUser({...user, email: e.target.value})} 
            onBlur ={handleBlur} /> 
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
        <button onClick = {handleClick} > Register </button>
        </form> 
        </>
    )
}

export default Registration;

//onMouseOver={extractUsername}