// React
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// MUI Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// Icon Components
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';

// MUI Colors
import { grey } from '@mui/material/colors';

// Data
import courses from '../../data/courses';

const CustomAppBar = ({ title }) => {
  const [open, setOpen] = useState(false);

  const appPages = [
    {
      name: 'Home',
      path: '/',
      external: false,
      icon: <HomeIcon />,
    },
    {
      name: 'About Author',
      path: 'https://yusril-adr.github.io',
      external: true,
      icon: <FaceIcon />,
    },
  ];

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(!open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'warning.main' }}>
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', mr: '1rem' }}>
              <IconButton
                size="large"
                aria-label="Toggle Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

            </Box>

            <Typography
              variant="h6"
              noWrap
              component="h1"
              sx={{ flexGrow: 1, display: 'flex' }}
            >
              { title }
              <Typography
                variant="span"
                noWrap
                component="span"
                sx={{ display: { sx: 'none', lg: 'flex' } }}
              >
                &nbsp;-&nbsp;How to be an Ideal Top Search React JS Front-End Engineer
              </Typography>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <Box
          component="nav"
          sx={{ width: { xs: 250, lg: 300 } }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'warning.main', height: { xs: 100, lg: 200 }, color: '#fff',
            }}
          >
            <AssignmentIcon sx={{ fontSize: { xs: 70, lg: 130 } }} />
          </Box>
          <List>
            <ListItem>
              <Typography
                variant="span"
                noWrap
                component="span"
                sx={{ display: 'flex', color: grey[400] }}
              >
                <strong>App</strong>
              </Typography>
            </ListItem>
            { appPages.map(({
              name, path, icon, external,
            }) => {
              if (external) {
                return (
                  <a
                    href={path}
                    key={path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItem button sx={{ pl: { lg: '1.3rem' } }}>
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>

                      <ListItemText primary={name} />
                    </ListItem>
                  </a>
                );
              }

              return (
                <Link to={path} key={path}>
                  <ListItem button sx={{ pl: { lg: '1.3rem' } }}>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>

                    <ListItemText primary={name} />
                  </ListItem>
                </Link>
              );
            })}
          </List>

          <Divider />

          <List>
            <ListItem>
              <Typography
                variant="span"
                noWrap
                component="span"
                sx={{ display: 'flex', color: grey[400] }}
              >
                <strong>Courses</strong>
              </Typography>
            </ListItem>
            {courses.map(({ name, id }, pageIdx) => (
              <Link to={`/courses/${id}`} key={id}>
                <ListItem button sx={{ pl: '2rem' }}>
                  <ListItemText
                    primary={`${pageIdx + 1} - ${name}`}
                    className="text-ellipsis"
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

CustomAppBar.defaultProps = {
  title: 'Yusril\'s Summary',
};

CustomAppBar.propTypes = {
  title: PropTypes.string,
};

export default CustomAppBar;
