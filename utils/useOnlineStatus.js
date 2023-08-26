import { useEffect, useState } from 'react'

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true)

  // to check if online
  useEffect(() => {
    // The addEventListener() method attaches an event handler to a window.
    window.addEventListener('offline', () => {
      setOnlineStatus(false)
    })
    window.addEventListener('online', () => {
      setOnlineStatus(true)
    })
  }, [])

  // boolean value
  return onlineStatus
}

export default useOnlineStatus
