import React from 'react'
import "./Addnote.css";
import { useRef } from 'react';
import { useState } from 'react';
import Notelist from './Notelist';

export default function Addnote(props) {
  // const [text,settext]=useState('');
  // const [comp,setcomp]=useState(false);
  // localStorage.setItem('des',ref.current.value);
  // function serve(e){
  //   settext(e.target.value)
    

  // }
  
  
  // function handlesave(){
  //   localStorage.setItem('h',(text));
  //  // console.log(text);
  //   settext('');
  //   if(comp===false){
  //     setcomp(!comp);

  //   }
   
  // }
  // console.log('addcompoenr')
  
  
 
  
  return (
    <div>
    
    {/* <button onClick={handlesave} >save</button> */}
   
    <button onClick={props.save}>save</button>
     {/* <textarea onChange={serve} className='tarea' placeholder='Type to add a note' rows={15} cols={120}>
    
    
     </textarea> */}
     <textarea onChange={props.change}  className='tarea' placeholder='Type to add a note' rows={15} cols={120}>
    
    
    </textarea>
   
    
   

      
    
    
    
    </div>
  )
}