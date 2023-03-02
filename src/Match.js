import React  from 'react';
import { useEffect,useState } from 'react';

const Match = () => {
    
    const [password1,setPassword1]=useState("");
    const [password2,setPassword2]=useState("");
    const [match, setMatch]= useState(true);

    useEffect(()=>{
if(password1===password2){
    setMatch(true);
}
else{
    setMatch(false);
}
    },[password1,password2])
  
    return (
    <>
    
    

    <input type="text" onKeyUp={e=>setPassword1(e.target.value)}  />
    <input type="text" onKeyUp={e=>setPassword2(e.target.value)}  />
    {match ? <h1>Matched</h1>:<h1>Pass not matched</h1>}
    </>
  )
}

export default Match;
