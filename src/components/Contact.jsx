// src/components/Contact.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Box p={3} component="form" noValidate autoComplete="off">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Your Email" type="email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Message" multiline rows={4} variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Send Message
      </Button>
    </Box>
  );
}

export default Contact;
