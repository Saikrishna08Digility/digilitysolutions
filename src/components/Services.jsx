import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia} from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    // marginRight: theme.spacing(2),
    // marginLeft:theme.spacing(2),
    borderRadius: theme.shape.borderRadius + 10,
    boxShadow: `0px 0px 10px #e0e0e0`,
    
    height:'100%'

}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: '120px',
    width: '120px',
    marginLeft: 'auto',
    marginRight: 'auto'
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
    textAlign: 'center',
    //textAlign:'justify',
    lineHeight: '1.3em',
    fontSize: '15px',
    display: 'block',

    // margin-block-start: '1em'
    // margin-block-end: '1em'
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
    // unicode-bidi: isolate;
}));


const Keywords = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    '& > span': {
      margin: theme.spacing(0, 1),
      '&:not(:last-child):after': {
        content: '"|"',
        margin: theme.spacing(0, 1),
        color: '#e0e0e0',
      },
    },

}));

const services = [
    {
        image: 'https://clouder.ai/wp-content/uploads/2022/03/cloud-database.png', // replace with your image url
        title: 'Cloud Consulting',
        description: 'Cloud computing is expensive technology if you don’t handle it wisely. Let us help you to onboard in an optimized way, we use disciplined techniques for restructuring your existing servers, database, applications, and code with industry best practices and guidelines.',
        keywords: 'GCP | AWS | Azure',
    },
    {
        image: 'https://clouder.ai/wp-content/uploads/2022/03/data-analytics.png', // replace with your image url
        title: 'Product Consulting',
        description: 'We transform your thought, paper design, or idea into a real product. It’s an extensive process with our expert’s questionnaire and market analysis assist you to define your success and ROI.',
        keywords: 'SaaS | Mobile | Web',
    },
    {
        image: 'https://clouder.ai/wp-content/uploads/2022/03/consulting.png', // replace with your image url
        title: 'Training and Staffing',
        description: 'The world needs more Cloud, AI, and Machine learning experts by 2030. We are happy to contribute to training, mentoring, and placements to corporates on advanced technologies.',
        keywords: 'Assessment | Placement',
    },
];

function Services() {
    return (
        <Box sx={{ flexGrow: 1, paddingLeft:{md:18}, paddingTop: 4, padding:{xs:2,sm:6, }, backgroundColor: '#f5f5f5', border: '0px solid red' }}>
            <Typography variant="h4" align="inherit" gutterBottom>
                Our Services
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ border: '0px solid green',  }}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ border: '0px solid blue',}} >
                        <StyledCard sx={{ border: '0px solid orange', marginBottom:'50px' }} >
                            <StyledCardMedia
                                image={service.image}
                                title={service.title}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="div" color="#061020" fontWeight="700" fontFamily="Rubik" fontStyle="normal">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="#6d727c" textAlign='justify' fontFamily='Rubik' fontWeight='500' fontSize='15px' fontStyle="normal" >
                                    {service.description}
                                </Typography>

                                <Keywords>
                                    {service.keywords.split(' | ').map((keyword, index) => (
                                        <span key={index}>{keyword}</span>
                                    ))}
                                </Keywords>

                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Services;
