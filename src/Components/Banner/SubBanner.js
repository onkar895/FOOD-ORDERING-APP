import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ProductData, responsive } from './Data'
import {Box, styled} from '@mui/material'


const BannerContainer = styled(Box)` 
  margin-top: 40px;
  overflow: hidden;
  width: 100%;
  padding: 0 40px;
  // box-shadow : 2px 2px 2px 2px;

`

const BannerImage = styled(Box)`

:hover {
  transform : scale(1.1);
  transition : 0.3s;
  }

& > img {
  display: flex;
  align-items : center;
  aspect-ratio : 3/2;
  mix-blend-mode : color-burn;
  object-fit: contain;
  width: 100%;
  height : 30vh;
  cursor : pointer;

  
}

`


const SubBanner = () => {
  return (
    <BannerContainer>
      <Box style={{ marginTop:'5rem',}}>
        <h2>What's on your mind?</h2>
      </Box>
      
      <Carousel
        swipeable={false}    // disables the ability to swipe through the carousel items.
        draggable={true}    // disables dragging the carousel items.
        autoPlay={true}  // enables automatic play of the carousel items.
        responsive={responsive}
        infinite={true}
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
              <BannerImage key={id}>
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
