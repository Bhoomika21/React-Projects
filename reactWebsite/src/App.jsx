import { useState } from 'react'
// import { Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Home, About} from './components'
// import {index} from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      {/* <Outlet /> */}
      <Footer />
    </>
  )
}

export default App
