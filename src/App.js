import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Header/Navbar'
import HomePage from './Pages/HomePage'
import Error from './Pages/Error'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Restaurants from './Pages/Restaurants'
import Cart from './Pages/Cart'
import { Box } from '@mui/material'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const MainComponent = () => {
  return (
    <>
      <Box>
         <Navbar />
          <Box style={{ marginTop: '3rem'}}>
             <Outlet/>  
          </Box>
      </Box>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainComponent />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restaurants',
        element: <Restaurants/>
      },
    ],
    errorElement : <Error/>,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
