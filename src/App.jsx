import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const[length,setLength]=useState(4)
  const[password,setPassword]=useState("") 
 const[numAllowed,setNumAllowed]=useState(false)
 const[charAllowed,setCharAllowed]=useState(false)
 const [copy,setCopy]=useState("Copy")

 const passwordRef=useRef(null)

 const PasswordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz"
  if (numAllowed) {str += "1234567890"}
  if (charAllowed) {str += "!@#$%&*?+=/-_"}
  for (let i = 0; i < length; i++) {
   let char=Math.floor(Math.random() * str.length +1)
   pass += str.charAt(char)
   
  }
  console.log(pass)
  setPassword(pass)
},[length,numAllowed,charAllowed,setPassword])

const CopyPassword =()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
  setCopy("Copied")
  setTimeout(() => {
    setCopy("Copy");
  }, 1500);
}

useEffect(()=>{PasswordGenerator()},
[numAllowed,length,charAllowed,PasswordGenerator])

  return (
   <div className="w-2/5 mx-auto mt-32 bg-slate-400 py-10 px-16 rounded-xl">
   <div className="flex flex-col gap-10">
   <h1 className="text-center text-orange-500 font-semibold text-4xl">Password Generator</h1>
    <div className="w-full flex">
      <input  type="text" 
       className='outline-none w-full py-1 px-4' 
       value={password}
       ref={passwordRef}
       placeholder="password"
       readOnly
        />
      <button className="bg-sky-500 px-3 text-gray-100 font-semibold" onClick={CopyPassword}>{copy}</button>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-2">
        <input type="range" name="" id="" 
        value={length}
        min={4}
        max={16}
        onChange={(e)=>setLength(e.target.value)}
        />
        length :{length}
      </div>
      <div className="flex gap-2">
        <input type="checkbox" name="" id="number"
       
        defaultChecked={numAllowed}
        onClick={()=>setNumAllowed(prev => !prev)}
        />
        <label htmlFor="number">Number</label>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" name="" id="char" 
        defaultChecked={charAllowed}
        onClick={()=>setCharAllowed(prev => !prev)}
        />
        <label htmlFor="char">Character</label>
      </div>
      
    </div>
   </div>
   </div>
  )
}

export default App
