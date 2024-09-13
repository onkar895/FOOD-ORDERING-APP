import { Box, styled, Paper, Button, Link, Toolbar } from '@mui/material'

export const HeaderBox = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '14vh',
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(to bottom, rgba(238,194,174,0) 0%, rgba(230,99,103,0.1) 100%)',

  [theme.breakpoints.down('sm')]: {
    height: '10vh',
    backgroundImage: 'linear-gradient(to bottom, rgba(238,194,174,0) 0%, rgba(230,99,103,0.1) 100%)'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height: '12vh'
  }
}))

export const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.1) 100%)',
  position: 'fixed',
  [theme.breakpoints.between('sm', 'md')]: {
    position: 'static'
  }
}))

export const FoodLogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginLeft: '38px',
  '& > img': {
    cursor: 'pointer',
    background: 'none',
    width: '5vw',
    [theme.breakpoints.down('sm')]: {
      width: '12vw'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '8vw'
    }
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto'
  }
}))

export const HeadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '& > p': {
    fontFamily: 'Trebuchet MS',
    fontSize: '26px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',

    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Trebuchet MS',
      fontSize: '18px',
      color: 'rgb(211,47,47)',
      fontWeight: 'bolder'
    },

    [theme.breakpoints.between('sm', 'md')]: {
      fontFamily: 'Trebuchet MS',
      fontSize: '32px',
      color: 'rgb(211,47,47)',
      fontWeight: 'bolder'
    }

  },
  '& > p:nth-child(2)': {
    fontFamily: 'Trebuchet MS',
    fontSize: '12px',
    marginLeft: '3rem',
    marginBottom: '6px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',

    [theme.breakpoints.down('sm')]: {
      marginLeft: '1rem'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '4rem'
    }
  },

  [theme.breakpoints.down('sm')]: {
    width: '40vw'
  },

  [theme.breakpoints.between('sm', 'md')]: {
    width: '60vw'
  }

}))

export const NavItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  marginRight: '2.4rem',
  '& > ul': {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    listStyleType: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto'
  }
}))

export const ButtonBox = styled(Button)(({ theme }) => ({
  padding: '3px 15px',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1.5px solid rgb(211,47,47)',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  '&:hover': {
    background: 'rgb(211,47,47)',
    color: 'white',
    boxShadow: '3px 3px 6px rgb(211,47,47)'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3px 12px',
    margin: '3rem'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '6px 20px',
    marginLeft: '3rem'
  }
}))

export const GoogleButtonBox = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontFamily: 'Trebuchet MS',
  background: 'white',
  color: 'black',
  padding: '8px',
  textTransform: 'capitalize',
  '& p': {
    fontSize: '15px',
    fontWeight: 'bolder'
  },
  '&:hover': {
    background: 'white',
    color: 'black'
  },
  '& > img': {
    width: '2vw'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px',

    '& p': {
      fontSize: '12px'
    },
    '& > img': {
      width: '5vw'
    }
  }
}))

export const LoggedOutBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'rgb(211,47,47)',
  gap: '2px',
  fontWeight: 'bolder',
  '& > svg': {
    fontSize: '25px',
    color: 'rgb(211,47,47)',
    cursor: 'pointer'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none'
  }
}))

export const GetAppBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '2px',
  '& > a': {
    textDecoration: 'none',
    color: 'rgb(211,47,47)'
  },
  '& > svg': {
    fontSize: '25px',
    color: 'rgb(211,47,47)',
    cursor: 'pointer'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none'
  }
}))

export const CartBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& > svg': {
    marginBottom: '3px',
    fontSize: '28px',
    color: 'rgb(211,47,47)',
    cursor: 'pointer'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none'
  }
}))

export const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3.5%',
  [theme.breakpoints.down('sm')]: {
    marginTop: '30%'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop: '30%'
  }
}))

export const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',

  '& > img': {
    width: '45%',
    height: 'auto'
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    minHeight: '100vh',
    gap: '3rem',

    '& img': {
      width: '100%',
      height: 'auto'
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flexDirection: 'column-reverse',

    '& img': {
      width: '100%',
      height: 'auto',
      marginTop: '4.5rem'
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    width: '90%',
    minHeight: '80vh'
  }
}))

export const PaperBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
  justifyContent: 'center',
  width: '28%',
  backgroundColor: 'rgba(0,0,0,0.4)',
  height: '85vh',
  filter: 'drop-shadow(2px 2px 6px black)',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: 'auto',
    padding: '2rem'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '50%',
    height: 'auto',
    padding: '2rem'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    width: '50%',
    height: '50vh',
    margin:'10rem auto',
    padding: '2rem'

  }
}))

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  fontFamily: 'Trebuchet MS',
  marginRight: '35px',
  '& > p': {
    color: 'darkgray',
    fontFamily: 'Trebuchet MS',
    fontSize: '12px'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto'
  }
}))

export const InputBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',
  width: '80%',
  '& input': {
    fontSize: '12.5px',
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    '&:hover': {
      borderBottom: '2px solid white'
    }
  },
  '& > h3': {
    color: 'white'
  },
  '& label': {
    color: 'darkgray',
    fontSize: '14px',
    fontFamily: 'Trebuchet MS'
  },
  '& p': {
    fontFamily: 'Trebuchet MS',
    fontSize: '12px',
    cursor: 'pointer'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const NewUserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}))

export const SignUpLink = styled(Link)(({ theme }) => ({
  fontFamily: 'Trebuchet MS',
  cursor: 'pointer',
  fontWeight: 'bolder',
  fontSize: '12px',
  color: 'darkgray',
  textDecoration: 'none',
  marginTop: '0.5rem',
  '&:hover': {
    color: 'white'
  }
}))
