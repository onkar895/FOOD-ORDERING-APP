import React from 'react'
import { useRouteError } from 'react-router-dom'

const Style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  color: 'red',
  textAlign: 'center'
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
