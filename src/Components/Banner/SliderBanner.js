import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Data } from './Data';
import {Box, styled} from '@mui/material'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const BannerContainer = styled(Box)`
  width: 39vw;
  margin-top : 20px;
`

const BannerImage = styled(Box)` 

& > img {
  width: 100%;
  height: 48.5vh;
  objectFit: cover;
  // mix-blend-mode : multiply;
  objectFit: fill;
}
`

const SliderBanner = () => {
  return (
    <BannerContainer>
      {/* <Box style={{ margin:'1.2rem 0 0.5rem 1rem'}}>
        <h2>Best Offers for You</h2>
      </Box> */}
      
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
          Data.map((Images) => {
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

export default SliderBanner
