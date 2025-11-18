import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const New = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [firstName, setFirstName] = useState('')
const navigate = useNavigate();



const handleNew = async (e) =>{
    e.preventDefault();

    if (!firstName || !lastName || !email || !password){
        alert("please fill in all fields");
        return;
    }
    try{
        const response = await axios.post(
            'http://localhost:3000/user/reg',
            {firstName, lastName, email, password},
            {headers: {"Content-Type": "application/json"}}
        )
        console.log('signup response:,response.data')
        alert('signup successful please login' )
        navigate("/signup")
    } catch (err) {
        console.error("signup error:", err.response ? err.response.data : err.message);
        alert(
            `signup failed: ${
                err.response?.data?.message || "please try again later."
            }`
        );
    }
}
  
    return (
    <div>
         <form onSubmit={handleNew}>
                 <input type="text" name='firstName' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
                 <input type="text" name='lastName' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
                 <input type="text" name='email'  value={ email}onChange={(e)=>{setEmail(e.target.value)}} />
               <input type="text" name='password'  value = {password} onChange={(e)=>{setPassword(e.target.value)}}/>
                 <button type='submit'>SignUp</button>
           </form>
           
    </div>
  )
}

export default New














// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const New = () => {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()+


    





//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         const newUser={firstName,lastName,email,password}
        
//         axios.post('http://localhost:3000/user/reg', newUser)
//         .then((res)=>{
//             alert('user signed successfully')
//             console.log('response', res.data);
//             navigate('/new2')

            
//         })
//         .catch((err)=>{
//             alert('sign up failed')
//             console.log('err', err.response? err.response:err);

            

//         })

//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name='firstName'onChange={(e)=>{setFirstName(e.target.value)}} />
//                 <input type="text" name='lastName'onChange={(e)=>{setLastName(e.target.value)}} />
//                 <input type="text" name='email'onChange={(e)=>{setEmail(e.target.value)}} />
//                 <input type="text" name='password' onChange={(e)=>{setPassword(e.target.value)}}/>
//                 <button type='submit'>SignUp</button>
//             </form>
//         </>
//     )
// }

// export default New