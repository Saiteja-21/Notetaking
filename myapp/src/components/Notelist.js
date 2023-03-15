import React, { useState,useEffect } from 'react'
import Note from './Note'
import "./Notelist.css"
import {v4 as uuid} from "uuid";
import Search from './Search';

function Notelist(props) {
    // const [arr,setarr]=useState([]);
   

    
  //  function deleteid(id){
  //   let f=arr.filter((item)=>item.id!==id);
  //   setarr(f);
    
    // localStorage.remove('h');
    // let v=localStorage.getItem('h');
    // console.log(v)
   
    
   
  //  function searchtext(tex){
  //   let f=arr.filter((item)=>item.text.includes(tex));
  //   setarr(f);
   
  //   console.log('notelist');
  //   // localStorage.remove('h');
  //   // let v=localStorage.getItem('h');
  //   // console.log(v)
   
    
  //  }
   
   
    // const textdes=(localStorage.getItem('h'));
    // useEffect(()=>{
    //   localStorage.setItem('list',JSON.stringify(arr))
    //   const store=JSON.parse(localStorage.getItem('list'));
    //   console.log(store)
    //   setarr([
    //     {id:uuid(),
    //     text:textdes},...arr]);
    // },[textdes]
    // );
    // useEffect(()=>{
    //   const store=JSON.parse(localStorage.getItem('list'));
    //   console.log(store)
    //   setarr(store);
    //  },[])
    //  useEffect(()=>{
    //   localStorage.setItem('list',JSON.stringify(arr))
    //  },[arr]);
    
      
    // setarr(textdes);

   
   
  return (
    <div className='notelist'>
      
        
        {props.data.map((usertext)=><Note id={usertext.id} val={usertext.t} del={props.del} delnote={props.delnote} />)}
        
        {/* <Note val={textdes}/> */}
      
       
      
    </div>
  )
}


export default Notelist
