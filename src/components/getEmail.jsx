import React,{useState} from "react";
function GetEmail(){
const[email,setEmail]=useState(" ")
const handleChange=(e)=>{
    setEmail(e.target.value);
    console.log(email);
}

    return(
        <>
         <div><input type="email" onChange={handleChange} required placeholder='ashish@gmail.com' className="form-input px-4 py-3 rounded-full"/></div>
        </>

    )
}
export default GetEmail