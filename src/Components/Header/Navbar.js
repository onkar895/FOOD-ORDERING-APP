import React, { useState } from 'react'
import FoodGood from '../../Assets/FoodGood.png'
import CartLogo from '../../Assets/CartLogo.png'
import { Box, styled, AppBar, Toolbar, Typography } from '@mui/material'


const HeaderBox = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2px 35px;
    background-color: #ffffff;
    box-shadow: 0 0 1.2px 0 rgb(134, 130, 130);
`

const FoodLogoBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    & > img {
    background : none;
    width: 6.5vw;
    }
`

const HeadingBox = styled(Box)`
    display: flex;
    flex-direction: column;

    & > p {
    font-family: "Trebuchet MS";
    font-size: 28px;
    background: linear-gradient(to right, #f32170, #ff6b08, #f32170, #cf23cf, #f32170, #ff6b08);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bolder;
    }

    & h5 {
    font-family: "Trebuchet MS";
    margin-left: 3.2rem;
    color: #f32170;
    margin-bottom : 8px;
    }
  `

const NavItems = styled(Box)`

& > ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: black;
    font-weight: bold;
    font-size: 16px;
    list-style-type: none;
    margin-right: 16px;

    & li:hover {
    color: #ff6b08;
    cursor: pointer;
    }
}
`

const CartBox = styled(Box)`
display : flex;
align-items : center;
gap : 3px;

 & > img {
 width: 1.3vw;
 }
`

const Navbar = () => {

  return (
    <AppBar sx={{boxShadow : 'none'}}>
      <HeaderBox>
      <FoodLogoBox>
          <img src={FoodGood} alt='FoodLogo' />
        <HeadingBox>
          <Typography>
            The Foodie Zone
          </Typography>
          <h5>Taste of Everything</h5>
        </HeadingBox>
      </FoodLogoBox>
      
      <NavItems>
        <ul>
          <li>
            Home
          </li>
          <li>
            Menu
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
          <li>
            <CartBox>
                <img src={CartLogo} alt='CartLogo' />
                Cart
            </CartBox>
          </li>
        </ul>
        </NavItems>
      </HeaderBox>
    </AppBar>
  )
}

export default Navbar
