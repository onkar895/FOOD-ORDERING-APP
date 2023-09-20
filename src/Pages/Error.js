import React from 'react'
import { useRouteError } from 'react-router-dom'

const Style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  color: 'red',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(toBottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%)'
}

const Error = () => {

  const err = useRouteError()
  console.log(err)
  return (
    <div style={Style}>
      <h1>OOPS..!!!</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>
      <h3>{err?.status} : {err?.statusText || err?.message}</h3>
    </div>
  )
}

export default Error
