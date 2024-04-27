// src/components/Careers.js
import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';

const CareerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6)

}));

const CareerImage = styled('div')(({ theme }) => ({
  width: '40%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin: '4%',
  height: '350px',
  // width: {
  //   xs: '90%', // Applies to extra-small screens
  //   sm: '80%', // Applies to small screens
  //   md: '40%'  // Applies to medium screens and up
  // }

}));

const CareerContent = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(4),
  // backgroundColor: 'snow',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '2%',
  marginRight: '3%',
  marginLeft: '1%'
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));



function Careers() {

  const careers = [
    {
      image: 'https://clouder.ai/wp-content/uploads/2022/03/Innovtechsol-web-graphics-03-1-1536x1051.png',
      title: 'Software Engineer',
      description:
        'We are looking for a talented software engineer to join our team. You will be responsible for designing, developing, and maintaining our cutting-edge web applications' +
        'We are looking for a talented software engineer to join our team. You will be responsible for designing, developing, and maintaining our cutting-edge web applications.' +
        'We are looking for a talented software engineer to join our team. You will be responsible for designing, developing, and maintaining our cutting-edge web applications.',
    },
    {
      image: 'https://clouder.ai/wp-content/uploads/2022/03/Innovtechsol-web-graphics-02-1.png',
      title: 'Data Analyst',
      description:
        'As a data analyst, you will be responsible for collecting, analyzing, and interpreting data to help our business make informed decisions. Strong analytical and problem-solving skills are a must.',
    },
    {
      image: 'https://clouder.ai/wp-content/uploads/2022/03/Innovtechsol-web-graphics-03-1-1536x1051.png',
      title: 'Marketing Manager',
      description:
        'We are seeking a dynamic marketing manager to lead our digital marketing efforts. You will be responsible for developing and implementing effective marketing strategies to drive customer acquisition and engagement.',
    },
  ];


  const jobs = [
    { id: 1, title: "Frontend Developer", description: "Join our team as a lead frontend developer..." },
    { id: 2, title: "Project Manager", description: "Looking for an experienced project manager..." },
  ];

  return (

    //  <Box p={3}>
    //     <Typography variant="h4" gutterBottom>
    //       Careers at Our Company
    //     </Typography>
    //     <List>
    //       {jobs.map(job => (
    //         <ListItem key={job.id}>
    //           <ListItemText primary={job.title} secondary={job.description} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Box>

    <div>
      <Grid container style={{ border: '0px solid red', backgroundColor: 'snow', }}>
        <Typography sx={{paddingLeft:{xs:2, sm:6,md:11},paddingTop:{xs:2, sm:4} }} variant="h4" gutterBottom>
          Careers at Our Company
        </Typography>

        {careers.map((career, index) => (
          <Grid item xs={12} key={index} style={{ border: '0px solid green' }} >

            {index % 2 === 0 ? (
              <CareerBox style={{ border: '0px solid blue' }} sx={{
                display: { xs: 'none', md: 'flex' }
              }}>
                <>
                  <CareerContent style={{ border: '0px solid orange', }}>
                    <Title variant="h4">{career.title}</Title>
                    <Description variant="body1">{career.description}</Description>
                    <Button variant="contained" color="primary">
                      Apply Now
                    </Button>
                  </CareerContent>
                  <CareerImage style={{ backgroundImage: `url(${career.image})`, border: '0px solid orange' }} />
                </>
              </CareerBox>
            ) : (
              <CareerBox style={{ border: '0px solid blue' }} sx={{
                display: { xs: 'none', md: 'flex' }
              }} >
                <>
                  <CareerImage style={{ backgroundImage: `url(${career.image})`, border: '0px solid orange' }} />
                  <CareerContent style={{ border: '0px solid orange' }}>
                    <Title variant="h4">{career.title}</Title>
                    <Description variant="body1">{career.description}</Description>
                    <Button variant="contained" color="primary">
                      Apply Now
                    </Button>
                  </CareerContent>
                </>
              </CareerBox>
            )}

            <CareerBox style={{ border: '0px solid blue', flexDirection: 'column', marginRight: '0%', marginLeft: '0%' }} sx={{
              display: { md: 'none' }
            }} >
              <>
                <CareerImage style={{ backgroundImage: `url(${career.image})`, border: '0px solid orange', width: '80%', height: '250px', position: 'relative', left: '5%' }} />
                <CareerContent style={{ border: '0px solid orange', width: '100%', marginRight: '0%', marginLeft: '0%' }}>
                  <Title variant="h5">{career.title}</Title>
                  <Description variant="body1">{career.description}</Description>
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                </CareerContent>
              </>
            </CareerBox>




            {/* <CareerBox style={{ border: '2px solid blue' }}>
              <CareerImage style={{ backgroundImage: `url(${career.image})`, border: '2px solid orange' }} />
              <CareerContent style={{border: '2px solid orange'}}>
                <Title variant="h4">{career.title}</Title>
                <Description variant="body1">{career.description}</Description>
                <Button variant="contained" color="primary">
                  Apply Now
                </Button>
              </CareerContent>
            </CareerBox> */}

          </Grid>
        ))}
      </Grid>
    </div>


  );
}

export default Careers;
