import { Outlet } from 'react-router-dom';

// Package Components
import Container from '@mui/material/Container';

// Global Components
import AppBar from '../AppBar';
import Footer from '../Footer';

const Layout = () => (
  <>
    <AppBar />

    <Container component="main" sx={{ pt: '2rem', mb: '1rem' }}>
      <Outlet />
    </Container>

    <Footer />
  </>
);

export default Layout;
