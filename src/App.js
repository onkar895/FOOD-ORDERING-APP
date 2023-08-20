import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Header/Navbar'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import { Box } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainComponent/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  //  {
  //   path: '/contact',
  //   element: <Contact/>,
  // },
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
