import React, { useEffect, useState, useContext } from 'react'
import FoodLogo from '../../Assets/FoodLogo.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box, styled, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../utils/userContext';
// import useOnlineStatus from '../../../utils/useOnlineStatus';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';



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

const MainBox = styled(Box)`
display : flex;
align-items:center;
gap :2px;

: hover {
  color : rgb(211,47,47);
}
`

const CartBox = styled(Box)`
position : relative;
display : flex;
align-items:  center;

& > svg {
  margin-bottom : 3px;
  font-size: 30px ;
  border-radius : 30%;
}
`

const CartItemBox = styled(Box)`
position: absolute;
top: 10px;
left: 10px;
color : white;
font-size: 16px;
font-weight : bolder;
font-family: "Trebuchet MS";

`

const ButtonBox = styled(Button)`
padding: 2px;
width: 7vw ;
align-items: center;
cursor: pointer;
font-weight: bolder;
border : 1.5px solid rgb(211,47,47);
text-transform : capitalize;

:hover {
  background : rgb(211,47,47);
  color : white;
}
`

const LoginUserBox = styled(Box)`
display : flex;
align-items : center;
gap : 25px;
`

const LoggedInBox = styled(Box)`
display : flex;
align-items : center;
color : rgb(211,47,47);
gap : 3px;
font-weight : bolder;
`


const Navbar = () => {

  // Using Context
  const {loggedInUser} = useContext(UserContext)
  // console.log(loggedInUser);

  const [isLoggedIn, setIsLoggedIn] = useState("LogIn")
  

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

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.items)
  // console.log(cartItems)


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
              <MainBox>
                <Box>Cart</Box>
                  <CartBox>
                    <ShoppingBagIcon/>
                    <CartItemBox>
                      {cartItems.length}
                    </CartItemBox> 
                  </CartBox>
                </MainBox>
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
          
          <LoginUserBox>

            <ButtonBox variant='outlined' color='error' onClick={() => navigate("/login")}>
              {isLoggedIn}
            </ButtonBox>

            <LoggedInBox>
              <PersonIcon/>
              {loggedInUser}
            </LoggedInBox>
            
          </LoginUserBox>

         
          
      </NavItems>
       
      </HeaderBox>
    </AppBar>
  )
}

export default Navbar
