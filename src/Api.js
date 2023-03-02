import { useEffect,useState } from "react";
import React  from 'react';

const Api = () => {


const [names,setNames]=useState([]);

    useEffect(()=>{
        fetch('https://reqres.in/api/users')
        .then(res=>res.json())
        .then(response=>setNames(response.data));

    },[])
  return (
    <div>
        <ul>
      {names.map((single_user,idx)=>{
console.log(single_user);
return <li> {single_user.first_name} {single_user.last_name} ({single_user.email}) </li>
      })}
      </ul>
    </div>
  );
}

export default Api;
