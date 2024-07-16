import React from 'react'
import card from '/Components/card'


function Cards({users}) {
  return (
    <div className='w-full  m-h-96 overflow-auto p-4 flex justify-center gap-4'>
      {users.map((item,index)=>{
      return <card key={index}/>
      })}
      
      

    </div>
  )
}

export default Cards