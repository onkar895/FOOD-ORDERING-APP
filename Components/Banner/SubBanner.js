import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ProductData, responsive } from './Data'
import {Box, styled, Typography} from '@mui/material'


const BannerContainer = styled(Box)` 
  margin-top: 50px;
  overflow: hidden;
  width: 100%;
  padding: 0 40px;
  // box-shadow : 2px 2px 2px 2px;
`

const BannerImage = styled(Box)`

& > img {
  display: flex;
  align-items : center;
  object-fit: contain;
  width: 100%;
  height : 30vh;
}

`


const SubBanner = () => {
  return (
    <BannerContainer>
      <Box style={{ margin:'1rem 0 0 0.3rem'}}>
        <h2>What's on your mind?</h2>
      </Box>
      
      <Carousel
        swipeable={false}    // disables the ability to swipe through the carousel items.
        draggable={false}    // disables dragging the carousel items.
        autoPlay={false}  // enables automatic play of the carousel items.
        responsive={responsive}
        infinite={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}  // enables control of the carousel using keyboard arrow keys.
        showDots={false}   // whether to display pagination dots at the bottom of the carousel 
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        {
          ProductData.map((Images) => {
            const { id, url } = Images
            return (
              <BannerImage key={id} >
                <img src={url} alt="BannerImages"/>
              </BannerImage>
            )
          })
        }

      </Carousel>
    </BannerContainer>
  )
}

export default SubBanner
