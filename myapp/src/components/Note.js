import React from 'react'
import "./Note.css"
import {MdDeleteForever} from "react-icons/md"


function Note(props) {
  const date=new Date();
  const date2=date.toLocaleDateString();
   // console.log(props.val);
  return (
    <div className='note'>
        <span>{props.val}</span>
        <div className='bottom'>
          <small>{date2}</small>  
          {/* <small><input type={'submit'}  value='delete'></input> </small> */}
         <small><MdDeleteForever onClick={()=>props.del(props.id)} size='1.6em'/> </small>
         {/* <DeleteIcon></DeleteIcon> */}
         
         
        </div>
      
    </div>
  )
}

export default Note
