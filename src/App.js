import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Header/Navbar'
import HomePage from './Pages/HomePage'
import {Box} from '@mui/material'

const MainComponent = () => {
  return (
    <>
      <Box>
         <Navbar />
          <Box style={{ marginTop: '3rem'}}>
             <HomePage/>  
          </Box>
      </Box>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MainComponent />)
