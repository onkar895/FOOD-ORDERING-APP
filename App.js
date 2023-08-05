import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Header/Navbar'
import Body from './Components/Body/Body'
import {Box} from '@mui/material'

const MainComponent = () => {
  return (
    <>
      <Box>
         <Navbar />
          <Box style={{ marginTop: '3rem'}}>
             <Body/>  
          </Box>
      </Box>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MainComponent />)
