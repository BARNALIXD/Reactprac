import React, { useState } from 'react'
import Card from './Components/Card'

function App() {

  const data =[
    {name:"sam", profession : "painters", image:"https://images.unsplash.com/photo-1605811792180-61ee063690de?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"chingu", profession : "dancer", image:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"mingu", profession : "singer", image:"https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"dingu", profession : "entertainer", image:"https://images.unsplash.com/photo-1470020618177-f49a96241ae7?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false}
  ];

 const[realdata, setrealdata]= useState(data);
 const dummy =()=>alert("hey");


  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center'>
    {realdata.map((item,index)=>(
      <Card key={index} dummy={dummy} values={item}/>

    ))}
    </div>
      </>
  )
}

export default App
//hghj