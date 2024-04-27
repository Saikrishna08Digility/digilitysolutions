
import React from 'react';
import { Container, Box, useTheme, useMediaQuery, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import aiVideo from './ai.mp4';
import { SvgIcon } from '@mui/material';
import { Settings as DevOpsIcon, Code as JavaIcon, CloudOutlined as CloudIcon } from '@mui/icons-material';



// const DevOpsIcon = () => (
//   <SvgIcon>
//     {/* Your DevOps SVG icon code */}
//   </SvgIcon>
// );

// const JavaIcon = () => (
//   <SvgIcon>
//     {/* Your Java SVG icon code */}
//   </SvgIcon>
// );

// const CloudIcon = () => (
//   <SvgIcon>
//     {/* Your Cloud Consulting SVG icon code */}
//   </SvgIcon>
// );


const VideoSection = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="100%" disableGutters>
      <Box
        position="relative"
        width="100%"
        height="100vh"
        overflow="scroll"
        border="2px solid Orange"
        // filter="blur(10px)"

        sx={{
          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 70%)',
          bgcolor: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: !isMobile ? '100%' : 'auto',
            // height: '100%',
            // objectFit: 'cover',
            // filter: 'blur(4px)'
          }}
        >
          <source src={aiVideo} type="video/mp4" />
        </video>

        <>
          <Box
            position="absolute"
            top={isMobile ? "20%" : "13%"}
            left={isMobile ? "1%" : "5%"}
            color="white"
            border='0px solid yellow'
            sx={{
              // bgcolor: 'rgba(0, 0, 0, 0.1)',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // shadow effect
              WebkitTextStroke: { xs: '0px', md: '0.3px black', sm: '0.2px black' }, // outline effect, mainly supported in WebKit browsers
              color: 'white',
              // backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 70%)'
            }}
          >
            <Typography
              // fontSize={{sm:'h3', md:'h2'}}
              style={{ border: '0px solid red', textAlign: 'left', color: 'white', fontWeight: 'bold', fontStyle: 'normal', fontFamily: 'monospace', }}
              variant={isMobile ? 'h5' : 'h2'}
            // semi-transparent black
            >Digility Solutions</Typography>

            <Typography style={{ border: '0px solid red', textAlign: 'left', fontWeight: 'lighter', fontFamily: 'monospace' }}
              variant={isMobile ? 'h6' : 'h5'}
              // width={isMobile ? '100%' : '55%'}
              width={{ xs: '100%', sm: '95%', md: '55%' }}
              fontSize={isMobile ? '10px' : '1.2em'}
            >
              We analyze companies Cloud infrastructure, find gaps and provide end-to-end solutions, including redesign, refactoring, re-architecture, development, and managed services.
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: { xs: '2%', sm: '5%', md: '0%' },
              pr: { xs: "2%", sm: "5%", md: '10%' },
              color: "white",
              width: { xs: '99%', sm: '100%', md: '100%' },
              border: '0px solid red',
              top: { xs: '45%', sm: '50%', md: "65%" },
              // backdropFilter: "blur(10px)" // Blurring the background of this box as well
              // bgcolor: 'rgba(0, 0, 0, 0.2)',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // shadow effect
              WebkitTextStroke: { xs: '0px', md: '0.2px black', sm: '0.2px black' }, // outline effect, mainly supported in WebKit browsers
              color: 'white',
              // backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 100%)', 
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <DevOpsIcon fontSize="large" />
                  <Typography variant="h6" mt={1}>DevOps</Typography>
                  <Typography variant={isMobile ? "body2" : "body1"} mt={1}>
                    DevSecOps| DataOps| laC | CI CD
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} >
                <Box display="flex" flexDirection="column" alignItems="center"  >
                  <JavaIcon fontSize="large" />
                  <Typography variant="h6" mt={1} >Java Technologies</Typography>
                  <Typography variant={isMobile ? "body2" : "body1"} mt={1}>
                    Java | Spring Boot | Spring Cloud
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <CloudIcon fontSize="large" />
                  <Typography variant="h6" mt={1}>Cloud Consulting</Typography>
                  <Typography variant={isMobile ? "body2" : "body1"} mt={1}>
                    Cloud Migration | Cloud Security | Cloud Native
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      </Box>
    </Container>
  );
};

export default VideoSection;