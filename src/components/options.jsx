import React,{useState} from "react"
import './form1.css'

function Options(){

    const [selectedOption,setSelectedOption]=useState(" ");

 const handleChange = (event) => {
     setSelectedOption(event.target.value);
  };

    return(
<div>






<select  onChange={handleChange} placeholder="Select Your Skills"    class="px-4 py-3 rounded-full"  >
<option value="Select Your Skills">Select Your Skills</option>
            <option value="Nodejs">NOdejs</option>
	<option value="React">React</option>
	<option value="Linux">Linux</option>
    <option value="Data Science">Data Science</option>
	<option value="Ethical Hacking">Ethical Hacking</option>
	<option value="Go lang">Go lang</option>
   
  
</select>
{console.log(selectedOption)}


<div>
    <span id="selectedOption">{selectedOption}</span>
</div>

</div>
    )
}
export default Options