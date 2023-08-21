import React from 'react'
import { Typography, Box, styled } from '@mui/material'
// import useNavigate from 'react-router-dom'

const MainContainer = styled(Box)(({ theme }) => ({
  width: '40vw',
  marginTop: '20px',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
   [theme.breakpoints.down('md')]: {
  }
}))
    


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items : center;
    margin-top : 20px;
    gap: 15px;
    

    & > h1 {
     background: linear-gradient(to right, #f32170, #ff6b08, #f32170, #cf23cf, #f32170, #ff6b08);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bolder;
    font-size : 40px;
    }

    & > h3 {
    color : black;
    font-size: 26px;
    }

    & > h4 {
       background: linear-gradient(to right, #f32170, #ff6b08, #f32170, #cf23cf, #f32170, #ff6b08);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bolder;
    }

`

const SubContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-weight: 600;

    & p {
       font-family: "Trebuchet MS"
    }
`

const Banner = () => {

  // const navigate = useNavigate()
  return (
    <MainContainer>
      <Container>
        <h1>Fresh & tasty Food</h1>
        <SubContainer>
          <Typography>
            Relax Please, we've got you
          </Typography>
          <Typography>
            covered every day of the week
          </Typography>
        </SubContainer>

        <h4>We are always ready to fullfill your demand.</h4>
        <h4>We provide you order within a very short time.</h4>
        <h4>Keep with us to take our delicious food.</h4>
      </Container>
    </MainContainer>
  )
}

export default Banner
