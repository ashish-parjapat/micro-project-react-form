import './form1.css'
import React,{useState,useEffect} from 'react';
import Banner from './Banner';
import Select from 'react-select'
const choices =[ 
  {value:'HTML',label:'HTML'},
  {value:'CSS',label:'CSS'},
  {value:'Javascript',label:'Javascript'},
  {value:'NodeJs',label:'NodeJs'},
  {value:'Linux',label:'Linux'}
  
]

function Form1(){
 
  const[Placeholder,setPlaceholder]=useState("Enter Your Skills");


  const[formValues,setFormValues]=useState({name:'',email:'',password:'',});

  const handleChange=(e)=>{
  // console.log(e);
    // console.log(e.target.name);
    // console.log(e.target.value)
    // console.log(typeof formValues);
    // console.log(typeof setFormValues);
    // formValues=e.target.value;
   
    // console.log(setFormValues(...formValues));
    setFormValues({...formValues,[e.target.name]:e.target.value})
      console.log(formValues);
   
  
  }
  const[select,setSelect]=useState([]);
  const handleSelect=(e)=>{
    // console.log(typeof e)
    setSelect([...e])
    // console.log(...e);
    console.log(e);
    console.log(select);
   

  }
  const isFormSubmit=()=>{
    for(const value in formValues){
      if(formValues[value].length===0){
        return false;
      }
    }
    return true;

  }
  const [active, setActive] = useState(false)
   useEffect(()=>{
    if(select.length>0&&isFormSubmit()){
      setActive(true);
    }
   },[select,formValues])


const reset=()=>{
  alert("You got subscribed succesfully")
  window.location.reload();
}






 return(
    <div className="grid grid-cols-2">

        
        <Banner/>
       
        <div className='freeBanner  items-center justify-center'>
 Try it free 7 days then ₹180/mo. thereafter
 


        <div className='grid grid-rows-6 formBox  items-center justify-center'>
       
        <div><input  name='name' type="text"  placeholder='Ashish Kumar' required  onChange={handleChange} value={formValues.name} className="form-input px-4 py-3 rounded-full"/></div>

          <div><input name='email' type="email"  required placeholder='ashish@gmail.com' onChange={handleChange} value={formValues.email} className="form-input px-4 py-3 rounded-full"/></div>

          <div><input  name='password'  type="password"  required placeholder='******'  onChange={handleChange} value={formValues.password} className="form-input px-4 py-3 rounded-full"/></div>

          <Select options={choices} onChange={handleSelect}  placeholder={Placeholder} isMulti value={select} className="form-input px-4 py-3 "  />
     
           
           <div> {active?  <button class="form-button-active "  onClick={reset}  >
            CLAIM YOUR FREE TRIAL
</button>:  <button class="form-button "   >
            CLAIM YOUR FREE TRIAL
</button> }
           </div>
          
             
             
          
         </div> 
           
        </div>
        </div>

    
 )   
}
export default Form1;