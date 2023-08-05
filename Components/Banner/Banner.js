import React from 'react'
import SaladImage from '../../Assets/Salad.png'
import { Typography, Box, styled } from '@mui/material'

const MainContainer = styled(Box)`
    display: flex;
    width: 58vw;
    margin-top: 75px;
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 40px;
    gap: 15px;

    & > h1 {
    font-size : 36;
    }

    & > h3 {
    color: #f32170;
    font-size: 22px;
    }

`

const SubContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 600;

    & p {
       font-family: "Trebuchet MS"
    }
`

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;

    & > img {
      width: 38vw;
    }
`
const Banner = () => {
  return (
    <MainContainer>
      <Container>
        <h1>Fresh & tasty salads</h1>
        <SubContainer>
          <Typography>
            Relax Please, we've got you
          </Typography>
          <Typography>
            covered every day of the week
          </Typography>
        </SubContainer>
        <h3>Order Food Online...</h3>
      </Container>
      <ImageContainer>
        <img src={SaladImage} alt='SaladImage' />
      </ImageContainer>
    </MainContainer>
  )
}

export default Banner
