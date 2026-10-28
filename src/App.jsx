import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [test,settest]=useState('')
  const [list, setlist] = useState(() => {
  const savedList = localStorage.getItem('tasks')
  return savedList ? JSON.parse(savedList) : []
})
  function valider(){
    if(test != ""){
    setlist([...list,{text:test,check:false}])
    settest("")
    }else{
      alert("veuillez entrer une tache")
    }

    
  }
function supprimer(i){
    setlist(list.filter((e,index)=>{return index!==i}))
  }
  function changestate(i){

    setlist(list.map((e,index)=> {
      if (i==index) {
        e.check=!e.check

      }
       return e;
    }
    ))
  }
  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(list))
}, [list])

  return (
    <div className='App'>
    <h1>TODO-LIST</h1>
    <div className='to-do-container'>
    <input type="text" placeholder='entrer une tache' value={test} onChange={(e)=> settest(e.target.value)}/>
    <button id='bt' onClick={valider}>valider</button>
    
    <ul>
      {list.map((e,index) => (
      <li key={index}>
        <p>{e.text}</p>
        <button onClick={() =>supprimer(index)}>❌</button>
        <input type="checkbox" checked={e.check} onClick={()=>changestate(index)}/>
        </li>
      
      ))}</ul>
      
      </div>
    </div>
  )
  
}

export default App
