import React from 'react'

function Card({values}) {
  const {name , profession, image}= values;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-sky-200'>
        <img  className="w-full h-full object-cover object-[0% 20%]"src={image}/>
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h3 className='text-xs'>{profession}</h3>
        <button onClick={()=>alert("adding as a friend")} className='mt-4 px-3 py-1 bg-red-600 rounded text-sm text-white font-semibold'>Add friend!</button>
      </div>
    </div>
    )
}

export default Card 