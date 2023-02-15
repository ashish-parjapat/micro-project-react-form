import './form1.css'
import Options from './options';
import GetName from './getName';
import GetEmail from './getEmail';
import GetPassword from './GetPassword';
import Button from './button';
function Form1(){
 return(
    <div className="grid grid-cols-2">

        
        
<div className=" grid grid-rows-2">
<div ><h1>Learn to code by
watching others</h1></div>
<div><p>See how experienced developers solve problems in real-time.</p>
<p>Watching scripted tutorials is great, but understanding how</p>
<p>developers think is invaluable.</p></div>

</div>
        <div className=''> <div className='freeBanner flex items-center justify-center'>
        Try it free 7 days then ₹180/mo. thereafter
        </div>
        <div className='grid grid-rows-6 formBox  flex items-center justify-center'>
     
          <GetName/>
          <GetEmail/>
          <GetPassword/>
            <Options />
            <Button />
            
          
          
           
        </div>
        </div>

    </div>
 )   
}
export default Form1;