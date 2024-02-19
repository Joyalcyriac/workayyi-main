import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Buffer } from "buffer";



import Workeredit from './Workeredit';


const Workerdetails = () => {
  var[selected,setSelected]=useState();
  var[update,setUpdate]=useState(false)
  var[Worker,setWoker]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then(response=>{
            setWoker(response.data)})
            // console.log(response.data)
    
    .catch(err=>console.log(err))
  },[])
    
    const updateValue=(row)=>{
      // console.log("update ")
      setSelected(row);
      setUpdate(true);
    }

    const deleteValue=(id)=>{
      console.log("deleted",id)
      axios.delete("http://localhost:3005/removeworker/"+id)
      .then((response)=>{
      alert("Deleted")
      //to reload window
      window.location.reload(false);
      })}
  

    

  var result=
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>phone number</TableCell>
            <TableCell>job</TableCell>
            <TableCell>experience</TableCell> 
            <TableCell>location</TableCell>
            <TableCell>photo</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
            
          
          </TableRow>
        </TableHead>
        <TableBody>
          {Worker.map((row,pos) => {
            return (
            <TableRow key={pos}>
              
            
              
              
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.job}</TableCell>
              <TableCell>{row.experience}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>
              <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`} width="50" height="50" alt="Error" />
              </TableCell>
               <TableCell> <EditIcon onClick={()=>updateValue(row)}></EditIcon></TableCell>
              <TableCell> <DeleteIcon onClick={()=>deleteValue(row._id)}></DeleteIcon></TableCell>
            </TableRow>
            )
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  if(update)
  
    result=<Workeredit data={selected} method='put'/>;
  
    return (result)
  
};
export default Workerdetails