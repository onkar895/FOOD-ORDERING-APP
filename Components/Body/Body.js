import React from 'react'
import HeaderBanner from '../Banner/HeaderBanner'
import SubBanner from '../Banner/SubBanner'
import Card from '../RestaurantCards/Card'
import { Box } from '@mui/material'

const Body = () => {
  return (
    <Box>
      <HeaderBanner />
      <SubBanner />
      <Card/>
    </Box>
  )
}

export default Body
