import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Name from './Name'
import Counter from './Counter'
import Tailwind_App from './components/Tailwind_App'
import './index.css'
import BgChanger from './BgChanger.jsx'
import ImageCarousel from './ImageCarousel.jsx'

let descText = "My real name is "; 
ReactDOM.createRoot(document.getElementById('bhoomika')).render(
  
  <React.StrictMode>
    
    {/*<p>Inside Main</p>
     <Name />
    <App /> */}
    {/* <Counter /> */}
    {/* <br/><br/><br/> */}
    {/* <Tailwind_App userName = "Bhoomika" descText = {descText + "Bhoomika"}  clickText = "Click Me"/> */}
    {/* <Tailwind_App userName = "Gopi" descText = {descText + "Gopi"}/> */}

    {/* <BgChanger /> */}

    <ImageCarousel />
  </React.StrictMode>
)
