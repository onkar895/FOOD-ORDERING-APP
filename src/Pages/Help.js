import React, { useState, useEffect } from "react";
import { Box, styled, Typography, Button, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Navbar from "../Components/Header/Navbar";
import HelpShimmer from "../Components/Shimmer/HelpShimmer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "../Components/Footer/Footer";

const MainContainer = styled(Box)`
// background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
`

const MainBox = styled(Paper)`
width : 60%;
margin : 3rem auto;
padding : 20px;
box-shadow : 0 0 4px 0 grey;
background-image: linear-gradient(to left, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
border-radius : 10px;
`

const ContentBox = styled(Box)`
display : flex;
flex-direction : column;
gap : 2rem;
`

const InfoBox = styled(Box)`
display :  flex;
gap : 10px;
flex-direction: column;
border : 1.3px solid rgb(208,208,208);
border-radius : 6.5px;
padding : 20px;
`

const DropDownContent = styled(Box)`

 & > p {
  font-family: "Trebuchet MS";
  color : grey;
  text-align : justify;
 }
`

const Help = () => {
  const [faqs, setFaqs] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    getFAQs();
    // eslint-disable-next-line
  }, []);

  const getFAQs = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/support/issues/faq"
    );
    const data1 = await data.json();
    setFaqs(data1?.data?.issues?.data);
  };

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (faqs === null) {
    return <HelpShimmer />;
  }

  return (
  <>
    <Navbar/>
    
    <MainContainer>
      faqs && (
        <MainBox>
    
          <ContentBox>
            <Box sx={{display:'flex', gap:'6px', alignItems:'center', textAlign:'start', color:'rgb(211,47,47)'}}>
              <h1>WE ARE ALWAYS READY TO HELP</h1>
              <ArrowForwardIcon sx={{fontSize:'36px'}} />
            </Box>
          
            {
              faqs?.map((item, index) => {
                return (
                  (item.description || item.hyperLink) &&
                  (
                    <Box key={item.title}>
                      <InfoBox>
                        <Box
                          onClick={() => handleClick(index)}
                          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor:'pointer' }}>
                          <h3>{item.title}</h3>
                          {
                            activeIndex !== index && (
                            <Button color="error">
                              {activeIndex ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </Button>
                            )
                          }
                        </Box>
                      
                         {
                          activeIndex === index &&
                          (
                            <DropDownContent>
                              {item.description && (
                              <Typography>{item.description}</Typography>
                              )}
                              {item.hyperLink && (
                               <a href="#" style={{color:'rgb(211,47,47)'}}>{item.hyperLink}</a>
                              )}
                            </DropDownContent>
                          )
                        }
                      </InfoBox>     
                    </Box>  
                  )
                );
              })
            }
          
          </ContentBox>
        </MainBox>
      )
      </MainContainer>  
      <Footer/>
  </>
  )
}

export default Help;