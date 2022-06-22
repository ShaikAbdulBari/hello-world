import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


// import Select from 'react-select';


function Create() {

  

 const [firstName,setFirstName]=useState("");
 const [lastName,setLastName]=useState("");
 const [email,setEmail]=useState("");
 const [gender,setGender]=useState(false);
 const [age,setAge]=useState("");
 let [skills,setSkills]=useState();
 
  skills=[];

  function sk(e){
    setSkills(
      {
        skills :e.target.value
      }
    )
  }


 const [country,setCountry]=useState("");
//  const [selectedValue, setSelectedValue] = useState([]);
 console.log("hiii");
 console.log(firstName);


function saveData(e)

{
  e.preventDefault()
 
  let data={firstName,lastName,email,gender,age,skills,country}
// console.warn(data);

console.log("hiii");



//   fetch("http://192.168.4.109:8080/api/contacts", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify(data)
//   }).then((resp)=>{
//     resp.json().then((result)=>{
//       console.warn("result",result)
//     })
//   })
}

const options =[];



  return (
    <div className="App">
      <form onSubmit={()=>saveData()}>

         <h1>POST API Data</h1>  
                  <label >First Name :</label>
                  <input type="text" name="firstName" placeholder='' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  /> <br /> <br />

                  <label >Last Name :</label>
                  <input type="text" name="lastName"  value={lastName} onChange={(e)=>{setLastName(e.target.value)}} /> <br /> <br />
                  
                  <label >Email:</label>
                  <input type="email" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /> <br />
                  
                  <label >Age:</label>
                  <input type="number" name="age"  value={age} onChange={(e)=>{setAge(e.target.value)}}/> <br /> <br />


                  <label >Gender</label>
                   <div onChange={(e)=>setGender(
                                   e.target.value  )}>
                         
                          <input type="radio" value="Male" name="gender" /> Male
                          <input type="radio" value="Female" name="gender" /> Female
                   </div>          

                  
                  
                   <label >Skills : </label>
                                               
                  <div  onChange={ (e)=>sk(e.target.valu)} >
                        <input type="checkBox" name="skills"  value='html' /> <label >html</label>
                        <input type="checkBox" name="skills"  value='Css' /> <label >Css</label>
                        <input type="checkBox" name="skills"  value='JavaScript' /><label >JavaScript</label>
                        <input type="checkBox" name="skills"  value='Angular' /> <label >Angular</label>
                        <input type="checkBox" name="skills"  value='React' /> <label >React</label>
                        <input type="checkBox" name="skills"  value='Sql' /> <label >Sql</label>
                  </div>
                  <br /><br />
                    
                    
                            <label >Country:</label>
                            <div >
                            <select onChange={(e)=>setCountry(e.target.value)} >
                                        <option >select Country</option>
                                        <option >India</option>
                                        <option >Sri Lanka</option>
                                        <option >Pakisthan</option>
                                        <option >Bangladesh</option>
                                        <option >China</option>
                                        <option >Nepal</option>
                                        <option >Bhutan</option>
                             </select>  
                             </div>  
                             <br /><br />

                
                <label >Description:</label>
                <input type="text"     /> <br /> <br />
                <br /><br />
                  
                  <button type='submit'> Save User </button>
      </form>
    </div>
  );
}


export default Create;
