import React from 'react'
import FoodLogo from '../../Assets/FoodLogo.png'
import CartLogo from '../../Assets/CartLogo.png'
import SearchIcon from '../../Assets/SearchIcon.png'
import { Box, styled,AppBar, Toolbar, Typography } from '@mui/material'


const HeaderBox = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 35px;
    background-color: #ffffff;
    padding: 10px 35px;
    // box-shadow: 0 0 1.2px 0 rgb(134, 130, 130);
`

const FoodLogoBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    & > img {
    width: 4vw;
    }
`

const HeadingBox = styled(Box)`
    display: flex;
    flex-direction: column;

    & > p {
    font-size: 30px;
    background: linear-gradient(to right, #f32170, #ff6b08, #f32170, #cf23cf, #f32170, #ff6b08);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bolder;
    }

    & h5 {
    margin-left: 3.5rem;
    color: #f32170;
    }
  `

const NavItems = styled(Box)`

& > ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: black;
    font-weight: bold;
    font-size: 18px;
    list-style-type: none;
    margin-right: 16px;

    & li:hover {
    color: #ff6b08;
    cursor: pointer;
    }
}
`

const CartBox = styled(Box)`
 & > img {
 width: 1vw;
 }
`

const SearchContainer = styled(Box)`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 0.5rem;

    & > input {
    font-family: "Trebuchet MS";
    width: 30vw;
    padding: 12px;
    padding: 10px;
    border-radius: 5px;
    color: grey; 
    }

    & img {
    position: absolute;
    width: 2.2vw;
    margin-right: 5px;
    cursor: pointer;
    }
`

const Navbar = () => {
  return (
    <AppBar sx={{boxShadow : 'none'}}>
      <HeaderBox>
      <FoodLogoBox>
        <img src={FoodLogo} alt='FoodLogo' />
        <HeadingBox>
          <Typography>
            The Foodie Zone
          </Typography>
          <h5>Taste of Everything</h5>
        </HeadingBox>
      </FoodLogoBox>
      <SearchContainer>
        <input type='text' placeholder=' Search for Restaurants and Food....' name='search' />
        <img src={SearchIcon} alt='SearchIcon' />
      </SearchContainer>
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
              <img src={CartLogo} alt='CartLogo' /> Cart
            </CartBox>
          </li>
        </ul>
        </NavItems>
      </HeaderBox>
    </AppBar>
  )
}

export default Navbar
