import React from 'react'
import { useRef } from 'react'

function App() {
const name = useRef(null);
const age = useRef(null);

const handleSubmit = (event)=>{
  event.preventDefault();
  console.log(name.current.value ,age.current.value)
}


  return (
  <form action='' onSubmit={handleSubmit}>
   <input ref={name} placeholder="name" type="text"/>
   <input ref={age} placeholder="name" type="text"/>
   <input type='submit'/>
  </form>  )
}

export default App