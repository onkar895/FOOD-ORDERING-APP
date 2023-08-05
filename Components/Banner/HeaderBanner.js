import React from 'react'
import Banner from './Banner'
import SliderBanner from './SliderBanner'
import {Box, styled} from '@mui/material'

const BannerContainer = styled(Box) `
  display: flex;
  gap: 5px;
`

const HeaderBanner = () => {
  return (
    <BannerContainer>
      <Banner />
      <SliderBanner/>
    </BannerContainer>
  )
}

export default HeaderBanner
