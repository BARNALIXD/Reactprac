import React from 'react'
import Card from './Components/Card'

function App() {

  const data =[
    {name:"sam", profession : "painters", image:"https://images.unsplash.com/photo-1605811792180-61ee063690de?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"chingu", profession : "dancer", image:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"mingu", profession : "singer", image:"https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"dingu", profession : "entertainer", image:"https://images.unsplash.com/photo-1470020618177-f49a96241ae7?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ];


  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center'>
    {data.map((item,index)=>(
      <Card image={item.image}/>

    ))}
    </div>
      </>
  )
}

export default App
//hghj