import { Button,TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Workeredit = (props) => {
    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put')
        {
            console.log("bvhxcbvhc")
            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                alert("Record updated")
                console.log("post data"+response.data)
                window.location.reload(false);
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
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
        <Button variant="contained"onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Workeredit