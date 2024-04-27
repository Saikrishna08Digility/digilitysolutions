// src/components/Home.js
import React from 'react';
import { Box, Typography } from '@mui/material';

import Blogs from './Blogs';
import Careers from './Careers';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Services from './Services'
// import NavBar from './NavBar';
// import NavBar from './shared/navbar/NavBar';
import VideoSection from './VideoSection';

import Header from './Header/Header';
import Footer from './Footer';

function Home() {
  return (
    <main>

      <Header />
      <div id="home"><VideoSection /></div>


      {/* <div id="home1" style={{ border: '0px solid green' }}>
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Welcome to Our IT Consultancy Services
          </Typography>
          <Typography variant="body1">
            We provide expert IT consulting services, helping organizations enhance their technology strategy, improve performance, and optimize resource utilization.
          </Typography>
        </Box>

      </div> */}

      <div id="about-us">
        <AboutUs />
      </div>

      <br></br><br></br>

      <div id="careers">
        <Careers />
      </div>

      <div id="services" >
        <Services/>
      </div>


      <br></br><br></br>
      <div id="blogs">
        <Blogs />
      </div>
      <br></br><br></br>

      {/* <div id="contact">
        <Contact />
      </div> */}

      <br></br><br></br>

      <div id="contact">
        <Footer />
      </div> 


    </main>

  );
}

export default Home;
