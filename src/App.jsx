import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {

 const data = [
  {image:"https://images.unsplash.com/photo-1475817712127-ef4cd1556aff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Undenied", artist:"Barnali", added: false},
  {image:"https://images.unsplash.com/photo-1650886000033-9a7b19073276?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Star", artist:"Chingu", added: false},
  {image:"https://images.unsplash.com/photo-1483575995838-3f59d40ea156?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Mars", artist:"Bingu", added: false},
  {image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Jupiter", artist:"wongu", added: true},
 ];
 const [songData, setSongData] = useState(data);
 const handleClick = (index) => {
  setSongData((prev)=>{
    return prev.map((item,itemindex)=>{
      if(itemindex === index) return{...item,added : !item.added}
     return item;
    })
  })
 }



  return (
    <>
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar data={songData}/>
      <div className=' flex px-20 flex-wrap gap-10 mt-10'>
      {songData.map((obj , index)=>{
        return <Card data={obj} handleClick={handleClick} index={index} key={index}/>
      })}
      
      </div>
      </div>
      </>
  )
}

export default App