import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Header/Navbar'

const MainComponent = () => {
  return (
    <div className='main'>
      <Navbar/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MainComponent />)
