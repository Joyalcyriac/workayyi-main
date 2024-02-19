import { Button,TextField } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'


const WorkerReg = () => {

        var [inputs,setInputs]=useState({
          "name":'',
          "phone":'',
          "job":'',
          "experience":'',
          "location":'',
        });
        var [selectedimage,setSelectedimage] = useState(null);
const handleimage =(event)=>{
const file = event.target.files[0];
setSelectedimage(file)
inputs.image1=file;
}

      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }
  // const addHandler=() =>{
  //   axios.post("http://localhost:3005/new",inputs)
  //   .then((Response)=>{
  //     alert("record saved")
  //   })
  //     .catch(err=>console.log(err))
  //   }

  const savedata =()=>{
    const formdata = new FormData();
    formdata.append('name',inputs.name);
    formdata.append('phone',inputs.phone);
    formdata.append('job',inputs.job);
    formdata.append('experience',inputs.experience);
    formdata.append('location',inputs.location);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/new',
    {method:'post',body:formdata,})
    .then((response)=>response.json())
    .then((data)=>{
    alert("record saved")
    })
    .catch((err)=>{
    console.log("error")
    })
    }
    
  return (
    <div>
      <br></br>
      <label>Add your profile pic</label>
  <input type="file" onChange={handleimage}></input> 
 <br ></br><br></br>
    <TextField     
label=" Full Name" 
name="name"
 variant="outlined" 
 value={inputs.name}
  onChange={inputHandler} /> <br />
<TextField
id="outlined-basic"
label="Phone number" 
name="phone" 
variant="outlined" 
value={inputs.phone} 
onChange={inputHandler} /><br />
<TextField 
id="outlined-basic"
label="Applying for Position"
name="job"
variant="outlined"
value={inputs.job}
 onChange={inputHandler}/><br />
    <TextField 
id="outlined-basic"
label="experience"
name="experience"
variant="outlined"
value={inputs.experience}
 onChange={inputHandler}/><br />
  <TextField 
id="outlined-basic"
label="location"
name="location"
variant="outlined"
value={inputs.location}
 onChange={inputHandler}/><br />
  
  <Button variant="contained" onClick={savedata}>OK</Button>
    </div>
  )
}

export default WorkerReg 