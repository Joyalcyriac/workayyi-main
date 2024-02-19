import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
var [inputs,setInputs]=useState({"username":'',"password":''})
const inputHandler = (event)=>{
const {name,value}=event.target
setInputs((inputs)=>({...inputs,[name]:value}))
console.log(inputs)
}
const navigate=useNavigate()
const checkData = async (event) => {
event.preventDefault();
try {
const response = await axios.post("http://localhost:3005/Loginsearch",{
username: inputs.username,
password: inputs.password,
})
if (response.data.success) {
alert('Login successful');
navigate('/land');
} 
else {
alert('Invalid email and Password. Please try again.');
console.log(response.data);
}
} catch (err) {
alert('Error occurred during login. Please try again.');
}
};
return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-blue-100 p-8 rounded-md shadow-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        <form className="space-y-4">
            <TextField
                required
                id="outlined-required"
                label="Username"
                name="username"
                value={inputs.username}
                onChange={inputHandler}
                className="w-full mb-4"
            />
            <TextField
                required
                name="password"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={inputs.password}
                onChange={inputHandler}
                className="w-full mb-4"
            />
            <Button variant="contained" onClick={checkData} className="w-full">Login</Button>
        </form>
    </div>
</div>
)
}
export default Login