import React, { useEffect, useState } from 'react'
import FoodGood from '../../Assets/FoodGood.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, styled, AppBar, Toolbar, Typography, Button } from '@mui/material'


const HeaderBox = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2px 35px;
    background-color: #ffffff;
    // box-shadow: 0 0 1.2px 0 rgb(134, 130, 130);
    background-image: linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%);
    // background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(255,0,0,0.3));
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
display : flex;
gap: 2rem;
margin-right : 1.6rem;


& > ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: black;
    font-weight: bold;
    font-size: 16px;
    list-style-type: none;

    & li:hover {
    color : #f32170;
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

const ButtonBox = styled(Button)`
padding: 2px;
width: 6vw ;
font-family: "Trebuchet MS";
color: #f32170;
align-items: center;
cursor: pointer;
font-weight: bold;
background: none;
border : 2px solid #f32170;
text-transform : capitalize;

:hover {
  background : #f32170;
  color : white;
}
`

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState("LogIn")
  
  console.log("Header Render")

  //1. If no dependency array => useEffect is called on every render
  //2. If dependency array is empty = [] => useEffect is called on Initial render(just Once)
  //3. If the dependency array is [isLoggedIn] => useEffect called everytime isLoggedIn is updated
  useEffect(() => {
    console.log("UseEffect Called")
  }, [])

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
                 Cart
                <ShoppingCartIcon fontSize='18px'/>
            </CartBox>
          </li>
        </ul>

          <ButtonBox onClick={() => {
          isLoggedIn === "LogIn" ? setIsLoggedIn("LogOut") : setIsLoggedIn("LogIn")
          }}>  {isLoggedIn}
        </ButtonBox>
       
          
      </NavItems>
       
      </HeaderBox>
    </AppBar>
  )
}

export default Navbar
