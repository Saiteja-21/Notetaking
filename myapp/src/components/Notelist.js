import React, { useState,useEffect } from 'react'
import Note from './Note'
import "./Notelist.css"
import {v4 as uuid} from "uuid";

function Notelist() {
    const [arr,setarr]=useState([]);
    
   function deleteid(id){
    let f=arr.filter((item)=>item.id!==id);
    setarr(f);
    // localStorage.remove('h');
    // let v=localStorage.getItem('h');
    // console.log(v)
   
    
   }
   console.log('notelist');
    
   
    const textdes=(localStorage.getItem('h'));
    useEffect(()=>{
      setarr([
        {id:uuid(),
        text:textdes},...arr]);
    },[textdes]
    );
    // setarr(textdes);
   
  return (
    <div className='notelist'>
        {arr.map((usertext)=><Note id={usertext.id} val={usertext.text} del={deleteid}/>)}
        {/* <Note val={textdes}/> */}
      
       
      
    </div>
  )
}

export default Notelist
