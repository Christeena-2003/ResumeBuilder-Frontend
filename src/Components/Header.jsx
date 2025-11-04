import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Header() {
  const intro='A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews.'
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fe/b8/5e/feb85e68-9968-73cc-be48-645af484f2f3/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg' width={'60px'} alt='logo' />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold'}}>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}> 
          {/* to={'/} is used to redirect to the landing page */}
            Resume-Builder
            </Link>
          </Typography>
          <Tooltip title={intro}><Button color="inherit">About</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
