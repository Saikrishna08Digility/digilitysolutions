// src/components/AboutUs.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function AboutUs() {
  return (
    <Box sx={{paddingLeft:{md:11, xs:2, sm:5 }, paddingTop:{xs:2,sm:4} }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        We are a leading IT consultancy firm with over 10 years of experience in providing bespoke technology solutions.
      </Typography>
    </Box>
  );
}

export default AboutUs;
