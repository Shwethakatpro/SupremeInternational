import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
// import logo from '../assets/img.jpg';
import logo1 from '../assets/logo1.png';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'chocolate', color: '#000', boxShadow: 'none', width:'99%'}}>
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <img src={logo1} alt="Russell Stover" style={{ height: '60px', width:'170px' }} />
            </Typography>
            {/* <Box>
                <Button variant="outlined">Create Promotion</Button>
                <Button variant="outlined" sx={{ marginLeft: 1 }}>Upload Promotion</Button>
                <Button variant="outlined" sx={{ marginLeft: 1 }}>Upload Deduction</Button>
            </Box> */}
        </Toolbar>
    </AppBar>
    
    );
};

export default Header;
