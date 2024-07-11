import React , {useState} from 'react'

function App() {
  const [val,setVal] = useState({name:""});
  const handleSubmit= (event)=>{
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handlesubmit} action=''>
        <input onChange={(event)=>setVal({name:event.target.value})} type="text" placeholder="name"/>
      </form>
    </div>
  )
}

export default App
