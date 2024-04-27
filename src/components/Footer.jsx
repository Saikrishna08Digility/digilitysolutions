import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { styled } from '@mui/material/styles';

const CookiesLink = styled('a')({
    color: 'white',
   textDecoration: 'underline',
   marginRight:'4px',
   '&:hover': {
        textDecoration: 'none',
    } 
 });

const PrivacyLink = styled('a')({
    color: 'white',
   textDecoration:'underline',
   '&:hover': {
        textDecoration: 'none', 
   }
 });

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 0,
        mt: 'auto',
        backgroundColor: 'orangered',
        border:'2px solid yellow',
        color:'white',
        fontFamily:'monospace',
        fontStyle:'normal',
        fontVariant:'simplified'
      }}
    >
      <Container maxWidth="lg" border='2px solid green'>
        <Grid container spacing={3} border="0px solid red">
          <Grid item xs={12} sm={6} md={2} border="0px solid orange" >
            <Typography border='0px solid green' variant="h2" color="inherit" gutterBottom>
              Digility
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={5} border="0px solid orange" >
            <Typography variant="subtitle1" color="inherit" display="flex" flexDirection={{xs:'column', sm:'column', md:'row'}}>
              <span>Copyright © Digility Slutions Pvt Ltd.  </span>
              <span> 2022 - All rights reserved </span>
            </Typography>
            <CookiesLink href='/cookies'>COOKIES</CookiesLink>  
            <PrivacyLink href='/privacy'> PRIVACY POLICY</PrivacyLink>
            
          </Grid>

          <Grid item xs={12} sm={6} md={3} border="0px solid orange" > 
            <Typography variant="h6" color="inherit" gutterBottom>
              Contact
            </Typography>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="subtitle1" color="inherit">
                mgmt@digilitysolutions.com
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="subtitle1" color="inherit">
                +1 40 4472 1000
              </Typography>
            </Box>
          </Grid>

          <Grid border='solid 0px red' item xs={12} sm={6} md={2} sx={{ textAlign: { xs: 'left', sm:'left', md: 'left' }, border:'0px solid green' }}>  
            <Typography variant="h6" color="inherit" gutterBottom border='0px solid yellow' paddingLeft='0px' >
              Connect
            </Typography>
            <IconButton color="inherit" sx={{ml:-1}} >
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit">
              <YouTubeIcon />  
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
