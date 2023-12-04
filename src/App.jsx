import { useCallback, useEffect, useState } from "react"


function App() {
  const[length,setLength]=useState(4)
  const[password,setPassword]=useState() 
 const[numAllowed,setNumAllowed]=useState(false)
 const[charAllowed,setCharAllowed]=useState(false)

 const PasswordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz"
  if (numAllowed) str += "1234567890"
  if (charAllowed) str += "!@#$%&*?+=/-_"
  for (let i = 0; i <length; i++) {
   let char=Math.floor(Math.random() * str.length +1)
   pass += str.charAt(char)
   
  }
  setPassword(pass)
},[length,numAllowed,charAllowed,setPassword])

useEffect(()=>{PasswordGenerator()},[PasswordGenerator,numAllowed,length,charAllowed])

  return (
   <div>

   </div>
  )
}

export default App
