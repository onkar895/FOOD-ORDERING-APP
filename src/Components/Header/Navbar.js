import React, { useEffect, useState } from 'react'
import FoodLogo from '../../Assets/FoodLogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, styled, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import useOnlineStatus from '../../../utils/useOnlineStatus';

const HeaderBox = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height : 14vh;
    background-color: #ffffff;
    background-image: linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%);

`

const FoodLogoBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content : center;
    gap : 20px;
    margin-left : 38px;

    & > img {
    cursor : pointer;  
    background : none;
    width : 5vw;
    }
`

const HeadingBox = styled(Box)`
    display: flex;
    flex-direction: column;

    & > p {
    font-family: "Trebuchet MS";
    font-size: 28px;
    color : rgb(211,47,47);
    font-weight: bolder;
    }

    & h5 {
    font-family: "Trebuchet MS";
    margin-left: 2.8rem;
    color: rgb(211,47,47);
    margin-bottom : 8px;
    }
  `

const NavItems = styled(Box)`
display : flex;
gap: 2rem;
margin-right : 2.4rem;


& > ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: black;
    font-weight: bold;
    font-size: 16px;
    list-style-type: none;
    
    & a {
      text-decoration : none;
      color : black;
    }

    & > li > a:hover{
    color : rgba(211,47,47,0.5);
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
width: 7vw ;
align-items: center;
cursor: pointer;
font-weight: bold;
border : 1.5px solid rgb(211,47,47);
text-transform : capitalize;

:hover {
  background : rgb(211,47,47);
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

   const navigate = useNavigate()
   
   const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(211,47,47)' : '',
      fontWeight: isActive ? 'bolder' : '',
    }
  }

  // const onlineStatus = useOnlineStatus()

  return (
    <AppBar sx={{boxShadow : 'none'}}>
      <HeaderBox>
      <FoodLogoBox>
          <img src={FoodLogo} alt='FoodLogo' onClick={()=> navigate('/')} />
        <HeadingBox>
          <Typography>
            The Foodie Zone
          </Typography>
          <h5> - Taste of Everything</h5>
        </HeadingBox>
      </FoodLogoBox>
      
      <NavItems>
          <ul>
            <li>
              <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/restaurants'>Menu</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            </li>
            <li>
             <NavLink style={navLinkStyle} to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/cart'>
                <CartBox>
                  Cart
                  <ShoppingCartIcon fontSize='18px'/>
                </CartBox>
              </NavLink>
            </li>
            {/* <li>
              <NavLink style={navLinkStyle}  to="/grocery">
                Grocery
              </NavLink>
            </li> */}
            {/* <li>
              {onlineStatus ? "Online ✅" : "Offline 🔴"}
            </li> */}
        </ul>

          <ButtonBox
            variant='outlined'
            color = 'error'
            onClick={() => {
          isLoggedIn === "LogIn" ? setIsLoggedIn("LogOut") : setIsLoggedIn("LogIn")
          }}>  {isLoggedIn}
        </ButtonBox>
       
          
      </NavItems>
       
      </HeaderBox>
    </AppBar>
  )
}

export default Navbar
