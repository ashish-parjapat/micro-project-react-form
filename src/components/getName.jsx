import React,{useState} from "react";
function GetName(){
  
    const [name,setName]=useState(null)
    const handleChange=(event)=>{
        setName(event.target.value);
        console.log(name);
       

    }

    return(
        <>
         
         <div><input type="text"  placeholder='Ashish Kumar' required onChange={handleChange} className="form-input px-4 py-3 rounded-full"/></div>
    
        

        </>
    )
}
export default GetName