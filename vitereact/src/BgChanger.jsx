import { useState } from "react"

function BgChanger(){
    const [bgColor, setbgColor] = useState("olive")
    const colorArray = ['red','yellow','pink','olive','blue','purple','green','grey','lavender', 'white', 'black']
    const randerList = () => {
        const listItem = []
        for(let i=0; i< colorArray.length; i++){  
            const currentColor = colorArray[i];
            listItem.push(
            <button 
                key={currentColor}
                onClick={() => setbgColor(currentColor)}    
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"                     
                style={{backgroundColor: currentColor}}>
                {currentColor}
            </button>);
        }
        return listItem;
    };
    
    return (
        <>
        
        <div className="w-full duration-200 h-screen duration-200" style = {{backgroundColor: bgColor}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    {randerList()}
                    {/* <button 
                        onClick={() => setbgColor("red")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"                     
                        style = {{backgroundColor: "red"}}>Red</button>

                    <button 
                        onClick={() => setbgColor("green")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"                     
                        style = {{backgroundColor: "green"}}>Green</button>

                    <button 
                        onClick={() => setbgColor("blue")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"                     
                        style = {{backgroundColor: "blue"}}>Blue</button>

                    <button 
                        onClick={() => setbgColor("grey")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"                     
                        style = {{backgroundColor: "grey"}}>Grey</button>

                    <button 
                        onClick={() => setbgColor("yellow")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"                     
                        style = {{backgroundColor: "yellow"}}>Yellow</button>

                    <button 
                        onClick={() => setbgColor("olive")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"                     
                        style = {{backgroundColor: "olive"}}>Olive</button>

                    <button 
                        onClick={() => setbgColor("pink")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"                     
                        style = {{backgroundColor: "pink"}}>Pink</button>

                    <button 
                        onClick={() => setbgColor("lavender")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"                     
                        style = {{backgroundColor: "lavender"}}>Lavender</button> */}
                </div>
            </div>        
        </div>
        </>
    )
}

export default BgChanger