import React, {lazy, Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Header/Navbar'
import HomePage from './Pages/HomePage'
import Menu from './Pages/Menu'
import Error from './Pages/Error'
import About from './Pages/About'
import Help from './Pages/Help'
import Restaurants from './Pages/Restaurants'
import Login from './Pages/Authentication/Login'
import Cart from './Pages/Cart/Cart'
import { Box } from '@mui/material'
import RestaurantMenu from './Pages/RestaurantMenu/RestaurantMenu'
// import Grocery from './Components/Grocery/Grocery'
import UserContext from '../utils/userContext'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utils/Firebase/FirebaseConfig'
import { Provider } from 'react-redux'
import appStore from './Store/appStore'
import 'normalize.css'
import './index.css'



// * Modularity is also known as:
// * Chunking
// * Code Splitting
// * Dynamic Bundling
// * Lazy Loading
// * On-Demand Loading
// * Dynamic Import

// const Grocery = lazy(() => import('./Components/Grocery/Grocery'));

const MainComponent = () => {

  const [userName, setUserName] = useState()
  const [user, setUser] = useState({})

  const Area = "Pune"

   useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser)
      console.log("user", currentUser)
    })
    return () => {
      unSubscribe();
    }
  },[])

  useEffect(() => {
    const data = {
      name : "User"
    }
    setUserName(data.name)
  },[])

  return (
    <>
        <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser : userName, setUserName,user, Area}}>
            <Box style={{ marginTop: '3rem' }}>
              {/* Outlet is like a tunnel so all the children according to the routes go inside and come over here in place of this Outlet. */}
              <Outlet/>  
            </Box>
          </UserContext.Provider>
        </Provider>
        
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainComponent />,
    children: [
      {
        path: '/home',
        element: <HomePage/>,
      },
      {
        path: '/restaurants',
         element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Menu/>
          </Suspense>
        )
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/help',
        element: <Help/>,
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      // {
      //   path: '/grocery',
      //   element: (
      //     <Suspense fallback={<h1>Loading...</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   )
      // },
      {
        path: '/restaurants',
        element: <Restaurants/>,
      },
      {
        path: '/restaurantmenu/:resId',
        element: <RestaurantMenu/>,
      },
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/error',
        element : <Error/>,
      },
    ],
   
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
