import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar style={{backgroundColor:"grey"}} >
        <Toolbar >
        <img 
        src='data:image/png;base64,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' alt=''
          width="100"height="100"
          />&nbsp;&nbsp;  
          <Typography variant="h4" >
      Clasic Resto
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <div style={{ justifyContent: 'space-between' }}>
          <Button variant="contained" style={{ margin: '0 10px' }} color="warning">
              <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>
               Home
              </Link>
              </Button>
          <Button variant="contained" style={{ margin: '0 10px' }} color="success">
              <Link to={'/About'} style={{ textDecoration: 'none', color: 'white' }}>
                About
              </Link>
              </Button>
          <Button variant="contained" style={{ margin: '0 10px' }} color="success">
              <Link to={'/Card'} style={{ textDecoration: 'none', color: 'white' }}>
              shop
              </Link>
              </Button>

            <Button variant="contained" style={{ margin: '0 10px' }} color="success">
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
                LOGIN
              </Link>
            </Button>
           
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;