import React, { useContext } from 'react'
import { Box, styled, Typography, Button} from '@mui/material'
import { SWIGGY_MENU_IMG_API, SWIGGY_CDN_LINK} from '../../../utils/Constants'
import DemoImage from '../../Assets/DemoImage.jpg'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { removeItem, clearCart } from '../../Store/cartSlice'
// import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const HeaderBox = styled(Box)`
display : flex;
align-items : start;
gap : 6rem;
margin-left: 6rem;
`

const MainContainer = styled(Box)`
display  :flex;
justify-content:  space-between;
align-items : center;
margin-bottom : 1.5rem;
width : 45vw;
padding : 20px;
box-shadow : 0 0 4px 0  rgba(208,208,208,0.8);
`

const CardContent = styled(Box)`
display  :flex;
flex-direction : column;
gap : 10px;

& > div > h4 {
  color : dimgray ;
}

& > div > p {
  font-size : 14px;
  color :  rgba(128,128,128,0.7);
  font-family: "Trebuchet MS";
}
`

const PriceBox = styled(Box)`
display : flex ;
gap : 10px;
align-items: center;

& h6 {
  font-weight : bolder;
  color : red;
  background-color : rgba(211,47,47,0.1);
  padding : 2px 5px;

  & > span {
    font-size: 10px;
  }
}
`

const MenuImageBox = styled(Box)`
position : relative;

& > img {
  object-fit : cover;
  border-radius: 5px;
  width : 10vw;
  height : 15vh;
}
`

// const AddRemoveBox = styled(Box)`
// display : flex;
// align-items : center;
// box-shadow : 0 0 5px 0  rgba(208,208,208,0.8);
// margin-left : 2rem;
// color :grey;

// & > button {
// padding : 10px 18px;
// background : none;
// border : none;

// :hover {
//   cursor : pointer;
//   color : rgb(211,47,47);
// }
// }
// `

const RemoveItemBox = styled(Box)`
cursor : pointer;
margin-left : 1.5rem;
color : grey;
color : rgb(211,47,47);
font-weight : 500;
`

const ButtonBox = styled(Box)`
display : flex;
gap : 20px;
font-weight : bold;

& button:nth-child(1) {
  font-family: "Trebuchet MS";
  text-transform : capitalize;
  background-color : rgba(55,118,210,0.1);


  :hover {
    color : white;
     background-color : rgb(55,118,210);
  }
}

& button:nth-child(2) {
  font-family: "Trebuchet MS";
  text-transform : capitalize;
  padding : 12px 46.5px;
  background-color : rgba(211,47,47,0.1);

  :hover {
    color : white;
    background-color : rgb(211,47,47);
  }
}
`

const InfoBox = styled(Box)`
display : flex;
flex-direction : column;
gap : 10px;
margin: 10px 0;
border-top: 1px solid lightgray;
border-bottom: 1px solid lightgray;
padding: 10px 0 15px 0;

& > div {
  display : flex;
  justify-content:space-between;
  align-items:center;
  color: #71797E;

  & p {
    font-family: "Trebuchet MS";
    font-size: 18px;
    color : black;
  }

  & h3 {
     font-family: "Trebuchet MS";
     color: black;
  }

  & span {
    Font-size:13px;
    color: rgb(211,47,47);
  }
}
`

const TotalBox = styled(Box)`

  display : flex;
  justify-content:space-between;
  align-items:center;
  padding: 10px 0 15px 0;
  border-bottom: 1px solid lightgray;

  & h3 {
     font-family: "Trebuchet MS";
  }
`

const SummaryContainer = styled(Box)`
display : flex;
flex-direction : column;
gap : 20px;
`

const Container = styled(Box)`
padding : 25px 20px;
width : 28vw;
box-shadow : 0 0 6px 0  rgba(208,208,208,0.8);
height : 60vh;
`

const CartItemList = ({ items, dummy, }) => {
  // console.log(dummy)
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleRemove = (item) => {
    dispatch(removeItem(item)) ?
      toast.success("Removed from Cart", {
        position: "top-center",
        newestOnTop: true,
        autoClose: 1000,
      }) :
      toast.error("Not Removed", {
        position: "top-center",
        newestOnTop: true,
        autoClose: 1000,
      })
  }

    const handleClearCart = () => {
    dispatch(clearCart()) ?
      toast.success("All Items Removed", {
        position: "top-center",
        newestOnTop: true,
        autoClose : 1000,
      }) :
      toast.error("Items Not Removed", {
        position: "top-center",
        newestOnTop: true,
        autoClose : 1000,
      }) 
  }

  const handleClick = () => {
    toast.success("Order Placed Successfully", {
        position: "top-center",
        newestOnTop: true,
        autoClose : 2000,
      }) 
  }


  const TotalAmount =
    items.length > 0
      ? items
          .map((x) => (x.card.info.price > 0 ? x.card.info.price / 100 : x.card.info.defaultPrice / 100))
          .reduce((sum, a) => sum + a, 0)
      : 0;
  
  const DeliveryCharges = (TotalAmount * 0.5) / 10;
  
  const Discount = (TotalAmount * 10) / 100;

  // const Taxes = (TotalAmount * 8) / 100;

  const FinalAmount = (TotalAmount + DeliveryCharges - Discount)

  return (
    <> 
      <h1 style={{textAlign:'center', marginBottom:'3rem', color:'rgb(211,47,47)'}}>Cart</h1>
      <HeaderBox>
        <Box>
          {
            items && items.map((item) => (
            
              <MainContainer key={item.card.info.id}>
              
                <Box sx={{ display: 'flex', gap:'20px', alignItems:'center'}}>
                  <MenuImageBox>
                    <img src={item.card.info.imageId ? SWIGGY_MENU_IMG_API + item.card.info.imageId : DemoImage} alt={""} />
                  </MenuImageBox>
                  <CardContent key={item?.card.info.id}>    
                    <Box>
                      <Typography>{item.card.info.name}</Typography>
                    </Box>
                
                    <PriceBox>
                      <h4>Price : {"₹"} {(item.card.info.price / 100 || item.card.info.defaultPrice/100).toFixed(2)}</h4>
                      <h6>50% OFF | <span>USE FOODIEIT</span></h6>
                    </PriceBox>
                  </CardContent>
                </Box>
                  {/* <AddRemoveBox>
                    <button onClick={() => handleRemove(item)}><h4>-</h4></button>
                    <span>{items.filter((f) => f.id === item.id).length}</span>
                    <button onClick={() => handleAddItem(item)}><h4>+</h4></button>
                  </AddRemoveBox> */}
              
                  <RemoveItemBox onClick={() => handleRemove(item)}>
                     Remove
                  </RemoveItemBox>
              
              </MainContainer> 
            ))
          }
        </Box>
            
        <SummaryContainer>
          <Container>
            <Box>
              <h2>Order Summary</h2>
            </Box>
            <InfoBox>
              <Box>
                <Typography>Price: ({items.length} Items)</Typography>
                <h3>{`₹ ${TotalAmount}`}</h3>
              </Box>
              <Box>
                <Typography>Discount (10%):</Typography>
                <h3>- ₹ {parseFloat(Discount).toFixed(2)}</h3>
              </Box>
              <Box>
                <Typography>Delivery Charges (5%):</Typography>
                <h3>+ ₹ {parseFloat(DeliveryCharges).toFixed(2)}</h3>
              </Box>
              {/* <Box>
                <Typography>Taxes (8%):</Typography>
                <h3>+ ₹ {parseFloat(Taxes).toFixed(2)}</h3>
              </Box> */}
              <Box>
                <span>You have saved <strong>₹ {parseFloat(Discount).toFixed(2)}</strong> on this order 😊</span>
              </Box>
            </InfoBox>
            <TotalBox>
              <h3>Total Amount :</h3>
              <h3> ₹ {parseFloat(FinalAmount).toFixed(2)}</h3>
            </TotalBox>
            <Box sx={{marginTop:'15px',}}>
              <Button onClick={handleClick}
                variant='contained'
                color='error'
                size='large'
                required fullWidth
              ><h4>Place Order</h4></Button>
            </Box>
          </Container>
          <ButtonBox>
            <Button variant="outlined" size="large" onClick={() => navigate(-1)}><h4>Continue Ordering</h4></Button>
            <Button variant="outlined" size="large" color="error" onClick={handleClearCart}><h4>Clear Cart</h4></Button>
          </ButtonBox>
        </SummaryContainer>
     
        {/* This component will render the toast notifications. */}
        <ToastContainer />  
      </HeaderBox>
    </> 
  )
}


export default CartItemList
