import React from 'react'
import Notelist from './Notelist'
import "./Search.css"

function Search(props) {
//    function usertext(e){
//     localStorage.setItem('g',e.target.value);
//     props.t;


//    }

  return (
    <div>
        <textarea  onChange={props.s} className='search' placeholder='serach' rows={2} cols={120}/>
        
      
    </div>
  )
}

export default Search
