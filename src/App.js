import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Header/Navbar'
import HomePage from './Pages/HomePage'
import Menu from './Pages/Menu'
import Error from './Pages/Error'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Restaurants from './Pages/Restaurants'
import Cart from './Pages/Cart'
import { Box } from '@mui/material'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import  RestaurantMenu  from './Pages/RestaurantMenu'

const MainComponent = () => {
  return (
    <>
      <Box>
         <Navbar />
        <Box style={{ marginTop: '3rem' }}>
          {/* Outlet is like a tunnel so all the children according to the routes go inside and come over here in place of this Outlet. */}
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
        element: <HomePage/>,
      },
      {
        path: '/restaurants',
        element: <Menu/>,
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
        element: <Cart/>,
      },
      {
        path: '/restaurants',
        element: <Restaurants/>,
      },
      {
        path: '/restaurantmenu/:resId',
        element: <RestaurantMenu/>,
      },
    ],
    errorElement : <Error/>,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
