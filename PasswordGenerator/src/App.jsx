import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowNumber) str += "1234567890"
    if(allowChar) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i<= length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }    
    setPassword(pass)

  }, [length, allowNumber, allowChar, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowChar, allowNumber])

  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
      
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordref}
          readOnly  />

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
              type="range"
              className='cursor-pointer'
              value={length}
              min={8}
              max={50}
              onChange = {(e) => {setLength(e.target.value)}} />
              <label>Langth: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked =  {allowNumber}
              id="numberInput"
              onChange={() => { setAllowNumber((prev) => !prev) }}
              />
               <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked =  {allowChar}
              id="characterInput"
              onChange={() => { setAllowChar((prev) => !prev) }}/>
              <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
