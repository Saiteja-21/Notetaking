// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Addnote from './components/Addnote';
import Notelist from './components/Notelist';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import {v4 as uuid} from "uuid";

function App() {
  const [text,settext]=useState('');
  const [arr,setarr]=useState([]);
  const [search,setsearch]=useState('');
  const [delnote,setdelnote]=useState();
  
 
  useEffect(()=>{
   
  const og=localStorage.getItem('a');
  const og2=JSON.parse(og);
  if(og2!==null)
  setarr(og2);
  // console.log(og2);

  },[]);
  useEffect(()=>{
    localStorage.setItem('a',JSON.stringify( arr));
 

  },[arr]);
 
  const usertext=(e)=>{
     settext(e.target.value);
  }
  const onSave=()=>{
    const obj={id:uuid(),
                t:text}
    settext('');
    setarr([obj,...arr]);


  }
  const searchUserinput=(e)=>{
    setsearch(e.target.value)

  }
  const deletenotes=(id)=>{
    setdelnote(id);
    console.log(delnote);
  
   const arr2=arr.filter((ele)=>ele.id!=id)
   setarr(arr2)
   
  
    
  }
  
 

  const originalarr=arr.filter((sample)=>sample.t.includes(search))
  // useEffect(()=>setdelnote(""),[])
  
  
 
  
  
  
  return (
    <div className="App">
     
      <Header />
      <Search s={searchUserinput}/>
      <Addnote change={usertext} save={onSave}/>
      
      <Notelist data={originalarr} del={deletenotes} delnote={delnote} />
      
      
      
     
    </div>
  );
}

export default App;
