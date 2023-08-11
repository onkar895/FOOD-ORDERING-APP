import React from 'react'
import HeaderBanner from '../Components/Banner/HeaderBanner'
import SubBanner from '../Components/Banner/SubBanner'
import Card from '../Components/Cards/Card'
import { Box, styled } from '@mui/material'
import { RestaurantList } from '../Constants'

const CardContainer = styled(Box)`
display : flex;
flex-wrap : wrap;
`

const HomePage = () => {
  return (
    <Box>
      <HeaderBanner />
      <SubBanner />
      <Box sx={{margin: '40px 0 0 46px'}}>
        <h2>Restaurants with online food delivery</h2>
      </Box>
      <CardContainer>
        {
          RestaurantList.map((restaurant) => {
            return <Card key={restaurant.data.id} {...restaurant.data} />
          })
        }
      </CardContainer>
    </Box>
  )
}

export default HomePage
