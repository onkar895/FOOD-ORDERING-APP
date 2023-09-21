import React, { useEffect, useState, useContext } from 'react'
import FoodLogo from '../../Assets/FoodLogo.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, styled, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../utils/userContext';
// import useOnlineStatus from '../../../utils/useOnlineStatus';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../../../utils/Firebase/FirebaseConfig'



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

    @keyframes example {
    0%   {color: #f32170;}
    25%  {color: #ff6b08;}
    50%  {color: #cf23cf;}
    100% {color: #F88379;}
  }

    & > p:nth-child(1) {
    font-family: "Trebuchet MS";
    font-size: 26px;
    color : rgb(211,47,47);
    font-weight: bolder;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    }

    & > p:nth-child(2) {
    font-family: "Trebuchet MS";
    font-size: 12px;
    margin-left: 3rem;
    margin-bottom : 3px;
    color : rgb(211,47,47);
    font-weight: bolder;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    }
  `

const NavItems = styled(Box)`
display : flex;
gap: 2rem;

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
gap : 3px;

& > svg {
  margin-bottom : 3px;
  font-size: 25px ;
}
`

const CartItemBox = styled(Box)`
position: absolute;
display : flex;
align-items : center;
justify-content : center;
background-color: rgb(211,47,47);
width : 1.5vw;
border-radius : 50%;
top: 0;
left: 15px;
`

const Item = styled(Box)`
color : white;
font-family: "Trebuchet MS";
`

const ButtonBox = styled(Button)`
padding: 3px;
width: 7vw ;
align-items: center;
cursor: pointer;
font-weight: bolder;
border : 1.5px solid rgb(211,47,47);
text-transform : capitalize;

:hover {
  background : rgb(211,47,47);
  color : white;
  box-shadow : 3px 3px 6px rgb(211,47,47);
}
`

const LogOutUserBox = styled(Box)`
display : flex;
align-items : center;
gap : 25px;
margin-right : 3rem;
`

const LoggedOutBox = styled(Box)`
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
  
  //1. If no dependency array => useEffect is called on every render
  //2. If dependency array is empty = [] => useEffect is called on Initial render(just Once)
  //3. If the dependency array is [isLoggedIn] => useEffect called everytime isLoggedIn is updated
  useEffect(() => {
    console.log("UseEffect Called")
  }, [])

  const navigate = useNavigate()
  
  //  onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (!currentUser) navigate('/')
  // })

  const handleSignOut = async (e) => {
    e.preventDefault();
    
    try {
      await signOut(firebaseAuth)
      navigate('/')
      
    } catch (error) {
      navigate('/error')
    }
  }
   
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
          <img src={FoodLogo} alt='FoodLogo' onClick={()=> navigate('/home')} />
          <HeadingBox>
            <Typography>
              The Foodie Zone
            </Typography>
            <Typography>Taste of Everything</Typography>
          </HeadingBox>
        </FoodLogoBox>
      
        <NavItems> 
          <ul>
            <li>
              <NavLink style={navLinkStyle} to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/restaurants'>Menu</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            </li>
            <li>
             <NavLink style={navLinkStyle} to='/help'>Help</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/cart'>
              <MainBox>
                <Box>Cart</Box>
                  <CartBox>
                    <ShoppingBasketIcon/>
                    <CartItemBox>
                      <Item>
                        {cartItems.length}
                      </Item> 
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
        </NavItems> 
        <LogOutUserBox>
            
             <LoggedOutBox>
              <PersonIcon/>
              {loggedInUser}
            </LoggedOutBox>

            <ButtonBox onClick={handleSignOut} variant='outlined' color='error'>
              LogOut
               <PowerSettingsNewIcon
                sx={{
                  ml: "4px",
                  fontSize: '18px',
                }}
              />
            </ButtonBox>
            
          </LogOutUserBox>
      </HeaderBox>
    </AppBar>
  )
}

export default Navbar
