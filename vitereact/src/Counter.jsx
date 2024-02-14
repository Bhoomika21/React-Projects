import { useState } from 'react'
function Counter(){
    let [conter, setCounter] = useState(0)

    // let addValue = () => setCounter(conter + 1)
    // let removeValue = () => setCounter(conter - 1)

    let addValue = () => {
        if(conter < 20){
            setCounter(conter + 1)
        }
        else{
            setCounter(conter)
            alert("Value is more then 20. Please minus some")
        }
    }   
    
    let removeValue = () => {
        if(conter > 0){
            setCounter(conter - 1)
        }
        else{
            setCounter(conter)
            alert("Value is less then. Please add some")
            // conter = "Value is less then. Please add some"
        }
    }

    
    
    

    return(
        <>
            <h1>Counter Value Updation.</h1>
            <h2>Counter value: {conter}</h2>
            <button className='mt-4 rounded-sm bg-black px-2.5 py-1 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    mr-3' onClick={addValue}>Increment by 1</button>
            <button className='mt-4 rounded-sm bg-black px-2.5 py-1 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    ' onClick={removeValue}>Decrement by 1</button>
        </>
    )
}

export default Counter