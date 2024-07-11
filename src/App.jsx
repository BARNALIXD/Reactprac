import React , {useState} from 'react'

function App() {
  const [val,setVal] = useState({name:""});

  return (
    <div>
      <form action=''>
        <input onChange={(event)=>console.log(event.target.value)} type="text" placeholder="name"/>
      </form>
    </div>
  )
}

export default App
