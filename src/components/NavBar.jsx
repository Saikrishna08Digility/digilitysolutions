


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HashLink } from 'react-router-hash-link';  // Import HashLink
import AdbIcon from '@mui/icons-material/Adb';
import { useState, useRef, useEffect } from 'react';
import logoDigility from '../Assets/UpdatedLogo.jpg';


const drawerWidth = 240;
const navItems = ['Home', 'About Us',  'Careers', 'Services', 'Blogs', 'Contact'];

function NavBar() {


  //const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);


  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navBarRef = useRef(null);

  const handleScroll = () => {
    //console.log('Scrolled!');
    //alert('scrolling')
    const currentScrollPos = window.scrollY;
    const hideCondition = currentScrollPos < prevScrollPos;
    setShowNavBar(hideCondition || currentScrollPos < navBarRef.current.offsetHeight);
    setPrevScrollPos(currentScrollPos);
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      //alert('window loaded')
      //console.log(window)
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos, showNavBar, navBarRef, handleScroll, window]); // Dependencies for re-running effect

  
  const navBarStyles = {
    position: 'fixed',
    top: showNavBar ? '0%' : '-100%', // Adjust offset for your NavBar height
    transition: 'top 0.3s ease-in-out'
  };


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const formatLinkPath = (item) => `/#${item.toLowerCase().replace(/\s+/g, '-')}`;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Digility
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={<HashLink to={formatLinkPath(item)} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item}
              </HashLink>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  const container = typeof window !== 'undefined' ? window.document.body : undefined;


  return (
    <div>
        <Box sx={{ display: 'flex', flexDirection: 'row', border: '0px solid Green' }}>
          <CssBaseline />
          <AppBar ref={navBarRef} style={navBarStyles} component="nav" sx={{ bgcolor: 'white', border: '0px solid red', marginBottom: '1px' }} >
            <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', border: '0px solid green' }} >

              <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, position: 'absolute', left: '1px', justifyContent: 'flex-start !important', border: '0px solid red' }}>  {/* Hide on larger screens */}
                <HashLink to="/#home">
                  {/* <img src="https://clouder.ai/wp-content/uploads/2021/04/Untitled-design-2.png" alt="Your Website Logo" style={{ height: '2.2rem' }} /> */}
                  <img src={logoDigility} alt="Your Website Logo" style={{ height: '1.5rem', marginLeft:'10px' }} ></img>
                </HashLink>
              </Box>

              <IconButton
                color="black"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ marginRight: 'inherit', display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>


              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '4rem', marginLeft:16 }} /> */}
              <Typography
                variant="h6"
                component="div"
                align="left"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', md: 'block' }, alignItems: 'center', marginLeft: '7%', border: '0px solid violet' }}
              >
                {/* <span>Digility Solutions</span>  */}

                <HashLink to="/#home"
                  sx={{ display: { sm: 'none' } }}
                >
                  {/* <img src="https://clouder.ai/wp-content/uploads/2021/04/Untitled-design-2.png" alt="Digility Solutions Logo" style={{ marginRight: 8, height: '3rem' }} /> */}
                  <img src={logoDigility} alt="Digility Solutions Logo" style={{ marginRight: 8, height: '2rem' }} />
                </HashLink>

              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'block', marginRight: '1.6rem' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff', marginX: '1.4rem' }}>
                    <HashLink to={formatLinkPath(item)} style={{ textDecoration: 'none', color: 'Black', fontSize: '1.2em', fontFamily: 'monospace', fontVariant: 'historical-forms' }}>
                      {item}
                    </HashLink>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav onClick={handleScroll}>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              anchor="top"
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
    </div>

  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;




