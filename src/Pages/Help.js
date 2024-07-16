import React, { useState } from "react";
import { Box, styled, Typography, Button, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Navbar from "../Components/Header/Navbar";
import HelpShimmer from "../Components/Shimmer/HelpShimmer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "../Components/Footer/Footer";
import { FAQ } from "../../utils/Constants";

const MainContainer = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(0),
}));

const MainBox = styled(Paper)(({ theme }) => ({
  width: '80%',
  margin: '8rem auto',
  padding: theme.spacing(4),
  boxShadow: '0 0 4px 0 grey',
  borderRadius: '10px',
  backgroundImage: 'linear-gradient(to left, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%)',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    margin: '6rem auto',
    padding: theme.spacing(0.5),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  gap: '2rem',
  '& > p': {
    fontWeight: 'bold',
    fontSize:'2rem',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'start',
 
    '& > p': {
      fontWeight: 'bold',
      fontSize: '1.2rem',
    }
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  
  '& > p': {
    fontSize: '16px',
     fontWeight: 'bold',
  },
  [theme.breakpoints.down('sm')]: {
    
    '& > p': {
      fontSize: '14px',
       fontWeight: 'bold',
    }
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: '1.3px solid rgb(208,208,208)',
  borderRadius: '6.5px',
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const DropDownContent = styled(Box)({
  '& > p': {
    fontFamily: 'Trebuchet MS',
    color: 'grey',
    textAlign: 'justify',
    fontSize: '14px', // Adjust font size for small screens
  },
});

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!FAQ) {
    return <HelpShimmer />;
  }

  return (
    <>
      <Navbar />
      
      <MainContainer>
        {FAQ && (
          <MainBox>
            <ContentBox>
              <HeadingBox sx={{ display: 'flex', gap: '6px', alignItems: 'center', textAlign: 'start', color: 'rgb(211,47,47)' }}>
                <Typography>WE ARE ALWAYS READY TO HELP</Typography>
                <ArrowForwardIcon sx={{ fontSize: '36px' }} />
              </HeadingBox>
            
              {FAQ.map((item, index) => (
                (item.description || item.hyperLink) && (
                  <Box key={item.title}>
                    <InfoBox>
                      <TitleBox
                        onClick={() => handleClick(index)}
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <Typography>{item.title}</Typography>
                        {activeIndex !== index && (
                          <Button color="error">
                            {activeIndex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          </Button>
                        )}
                      </TitleBox>
                    
                      {activeIndex === index && (
                        <DropDownContent>
                          {item.description && <Typography>{item.description}</Typography>}
                          {item.hyperLink && (
                            <Typography>
                              <a href="#" style={{ color: 'rgb(211,47,47)' }}>{item.hyperLink}</a>
                            </Typography>
                          )}
                        </DropDownContent>
                      )}
                    </InfoBox>
                  </Box>
                )
              ))}
            </ContentBox>
          </MainBox>
        )}
      </MainContainer>
      
      <Footer />
    </>
  );
}

export default Help;
