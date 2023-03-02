import React   from 'react';
import { useState } from 'react';





const Counter = () => {
    const [likes,setLikes]=useState(0);
  
    return (
    <>
    
    <button onClick={(e)=>setLikes(likes + 1)} >Like</button>
    <div>{likes}</div>
    <button onClick={(e)=>setLikes(likes - 1)} >DisLike</button>
    
    </>
  )
}

export default Counter