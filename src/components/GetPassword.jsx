import React,{useState} from "react";
function GetPassword(){

   




const[password,setPassword]=useState(null)
const handleChange=(e)=>{
    setPassword(e.target.value);
    console.log(password);
}

    return(
        <>
      <div><input type="password"  onChange={handleChange}  required placeholder='******' className="form-input px-4 py-3 rounded-full"/></div>
        </>

    )
}
export default GetPassword