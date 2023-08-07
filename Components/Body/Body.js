import React from 'react'
import HeaderBanner from '../Banner/HeaderBanner'
import SubBanner from '../Banner/SubBanner'
import Card from '../RestaurantCards/Card'
import { Box, styled } from '@mui/material'
import { RestaurantList } from '../RestaurantCards/RestaurantList'

const CardContainer = styled(Box)`
display : flex;
flex-wrap : wrap;
`

const Body = () => {
  return (
    <Box>
      <HeaderBanner />
      <SubBanner />
      <Box sx={{margin: '40px 0 0 46px'}}>
        <h2>Restaurants with online food delivery in Pune</h2>
      </Box>
      <CardContainer>
        {
          RestaurantList.map((restaurant) => {
            return <Card key={restaurant.data.id} {...restaurant.data} />
          })}
      </CardContainer>
    </Box>
  )
}

export default Body
