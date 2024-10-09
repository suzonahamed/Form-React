import React,{useState} from 'react'

const Form = () => {
    const[userInfo,setUserInfo]=useState({name:'',email:'',password:''})
    const{name,email,password}=userInfo

const handleChange=(e)=>{
    // const fildName=e.target.name
    // if(fildName==="name"){
    //     setUserInfo({name:e.target.value,email,password})
    // }
    // if(fildName==="email"){
    //     setUserInfo({name,email:e.target.value,password})
    // }
    // if(fildName==="password"){
    //     setUserInfo({name,email,password:e.target.value})
    // }

      setUserInfo({...userInfo,[e.target.name]:e.target.value}) 

}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(userInfo)
    setUserInfo({name:"",email:"",password:""})

}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
         type="text"
         id="name"
         name="name"
         value={name}
         onChange={handleChange}
         >   
         </input>
      </div>
      <div>
        <label>Email:</label>
        <input
         type="email"
         id="email"
         name="email"
         value={email}
         onChange={handleChange}
         >   
         </input>
      </div>
      <div>
        <label>Password:</label>
        <input
         type="password"
         id="password"
         name="password"
         value={password}
         onChange={handleChange}
         >   
         </input>
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default Form
