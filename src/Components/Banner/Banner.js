import React from 'react'
import PizzaBanner from '../../Assets/pizza-banner.jpg'
import { Typography, Box, styled } from '@mui/material'
// import useNavigate from 'react-router-dom'

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '58vw',
  marginTop: '75px',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
   [theme.breakpoints.down('md')]: {
    
  }
}))
    


const Container = styled(Box)`
    position : absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : start;
    margin-left: 60px;
    margin-top : 75px;
    gap: 15px;

    & > h1 {
    color : white;
    font-size : 36;
    }

    & > h3 {
    color: white;
    font-size: 22px;
    }

`

const SubContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 600;

    & p {
       color : white;
       font-family: "Trebuchet MS"
    }
`

const ImageContainer = styled(Box)`
    position : relative;
    display: flex;
    justify-content: center;

    & > img {
      border-radius : 22px;
      width: 90%;
    }
`
const Banner = () => {

  // const navigate = useNavigate()
  return (
    <MainContainer>
        <ImageContainer>
        <img src={PizzaBanner} alt='PizzaBanner' />
      </ImageContainer>
      <Container>
        <h1>Fresh & tasty Pizza's</h1>
        <SubContainer>
          <Typography>
            Relax Please, we've got you
          </Typography>
          <Typography>
            covered every day of the week
          </Typography>
        </SubContainer>
        <h3>Order Online to get 40% OFF...</h3>

        <button>Explore Restaurants</button>
      </Container>
    </MainContainer>
  )
}

export default Banner
