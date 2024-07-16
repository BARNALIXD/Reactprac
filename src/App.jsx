import React, { useState } from 'react'
import Cards from './Components/Cards'
import form from './Components/form'

function App() {
 const [users, setUsers] = useState([]);
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards users={users}/>
        <form/>
      </div>
    </div>
  )
}

export default App