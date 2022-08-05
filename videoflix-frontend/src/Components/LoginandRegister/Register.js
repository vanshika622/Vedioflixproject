import { useRef } from "react";
import './Loginandregister.css'

function Register(){
      // to store the current value of form (all inputs) 
     let form= useRef();

      let user={};
function readValue(property,value){
        user[property]=value;
        
    }

    function register(){
       fetch("http://localhost:8000/user/",{
           method:"POST",
           
           headers:{
            "Content-Type":"application/json"
           },
           body: JSON.stringify(user)

       })
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data)
        // to reset the form 
        form.current.reset();
       })   
       .catch((err)=>{
        console.log(err)
       })
    }

    return(
            <div className="app">
            <form className="container" ref={form}>
               <input type="text" className="form-control"  placeholder="Enter Your Name" onChange={(event)=>{
                 readValue("name",event.target.value)
               }}/>
               <input type="email" className="form-control" placeholder="Enter Email" onChange={(event)=>{
                readValue("email",event.target.value)
               }}/>
               <input type="password" className="form-control" placeholder="Create Password" onChange={(event)=>{
                readValue("password",event.target.value)
               }}/>
               <input type="number" className="form-control" placeholder="Enter Contact Number" onChange={(event)=>{
                readValue("contact",event.target.value)
               }}/>
               <input type="text" className="form-control" placeholder="Enter City" onChange={(event)=>{
                readValue("city",event.target.value)
               }}/>
               <input type="number" className="form-control" placeholder="Enter Pincode" onChange={(event)=>{
                readValue("pincode",event.target.value)
               }}/>

               <button type="button" className="btn btn-primary" onClick={register}>Register</button>
            </form>
            </div>
    )
}

export default Register