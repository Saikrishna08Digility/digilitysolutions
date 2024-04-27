import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Stack
} from '@mui/material';
import { styled } from '@mui/system';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BlogCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: theme.shape.borderRadius,
  // boxShadow: theme.shadows[3],
}));

const BlogCardMedia = styled(CardMedia)({
  height: 140,
});

function Blogs() {
  // Sample data for initial blogs

  // Sample data for initial blogs
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image: 'https://source.unsplash.com/random/1',
      title: 'Easy Strategies to Help Your Family Succeed in 2020',
      category: 'Branding',
      date: 'Mar 18, 2021',
      summary: 'who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues...',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/2',
      title: 'Women Balancing Family And Work During COVID-19',
      category: 'Branding',
      date: 'Mar 18, 2021',
      summary: 'who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues...',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/3',
      title: 'Greenland Unicorns and the Magical Alicorn',
      category: 'Society',
      date: 'Mar 18, 2021',
      summary: 'who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues...',
    },
    // More blogs can be added here
  ]);

  // Function to fetch more blogs
  // Function to fetch more blogs
  const loadMoreBlogs = () => {
    // Simulate fetching more blogs by duplicating current blogs
    // In a real application, you would make an API call to fetch more data
    const moreBlogs = blogs.map(blog => ({
      ...blog,
      id: blog.id + blogs.length, // Ensure unique IDs for new blogs
    }));
    setBlogs(blogs.concat(moreBlogs));
  };


  return (
    <Box sx={{ flexGrow: 1, paddingLeft: { md: 18 }, paddingTop: 4, padding: { xs: 2, sm: 6, }, backgroundColor: 'background.default', border: '0px solid red' }}>
      <Typography variant="h4" gutterBottom>
        Blogs
      </Typography>
      <Grid container spacing={4} justifyContent="center" border='0px solid red'>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id || index}>
            <BlogCard>
              <CardActionArea>
                <BlogCardMedia
                  image={blog.image}
                  title={blog.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {blog.category.toUpperCase()}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {blog.title}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ my: 1 }}>
                    <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}>
                      {blog.date}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {blog.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Button variant="text" size="small" onClick={() => { /* handle read more click */ }}>
                  Continue Reading →
                </Button>
              </Box>
            </BlogCard>
          </Grid>
        ))}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', border: '0px solid red', }}>
          <Button variant="contained" onClick={loadMoreBlogs} sx={{left:{md:'-3%'}}}>
          <ExpandMoreIcon /> More
        </Button>
      </Grid>

    </Grid>

      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, border: '1px solid red' }} >
        <Button variant="contained" onClick={loadMoreBlogs} startIcon={<ExpandMoreIcon />}>
          More
        </Button>
      </Box> */}


    </Box >
  );
}

export default Blogs;
