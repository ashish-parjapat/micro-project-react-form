import React,{useState} from "react";
import GetPassword from "./GetPassword";
function Button(){

    const[password,setPassword]=useState(null)
    const handleChange=(e)=>{
        setPassword(e.target.value);
        console.log(password);

    }



    function refreshPage() {

alert("Congrulation on free subscription")

        window.location.reload(true);
      }

  return(
    <>
  
{(setPassword==null) ?   <button class="btn btn-blue " disabled  onClick={refreshPage}>
            CLAIM YOUR FREE TRIAL
</button>
:  <button class="btn btn-blue " onClick={refreshPage} >
            CLAIM YOUR FREE TRIAL
</button>
        
}


    </>
  )
}

export default Button;