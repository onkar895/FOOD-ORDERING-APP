import { createContext } from 'react'

// Creating a React Context
const UserContext = createContext({
  loggedInUser: 'Default User'
})

export default UserContext
