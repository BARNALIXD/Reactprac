import React, { useState } from 'react';
import { GrAed } from "react-icons/gr";

function Card() {
 const[val,setVal] = useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className= 'relative w-60 h-32 bg-zinc-500 rounded flex overflow-hidden'>
       <img className={`${ val === false ? "-translate-x-[0%]": "-translate-x-[100%]"} shrink-0 w-full transistion-transform duration-300 h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1709560427978-0043cfa1aee5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img> 
       <img className={`${ val === false ? "-translate-x-[0%]": "-translate-x-[100%]"} shrink-0 w-full transistion-transform duration-300 h-full object-cover'`}  src="https://plus.unsplash.com/premium_photo-1709560426814-d19e445c41ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 flex items-center justify-center bg-[#dadada8b]rounded-full  bg-zinc-200 absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
      <GrAed size={".8em"}/>
      </span>
      </div>

    </div>
  )
}

export default Card