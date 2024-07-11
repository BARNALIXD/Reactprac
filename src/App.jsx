import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
const {register} = useForm(); 

  return (
    <div>
      <form action=''>
        <input type='text' placeholder='name'/>
        <input type='email' placeholder='email'/>
        <input type='submit'/>

      </form>
    </div>
  )
}

export default App