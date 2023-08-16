import React from 'react'
import Banner from './Banner'
import SliderBanner from './SliderBanner'
import { Box, styled } from '@mui/material'

const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',

// [theme.breakpoints.down('sm')]: {
//   flexDirection: 'column'
// }
}))

const HeaderBanner = () => {
  return (
    <BannerContainer>
      <Banner />
      <SliderBanner />
    </BannerContainer>
  )
}

export default HeaderBanner
