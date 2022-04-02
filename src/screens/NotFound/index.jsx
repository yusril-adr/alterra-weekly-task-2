import { Link } from 'react-router-dom';

// Package Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Files
import illustrationFile from '../../images/404.png';

const NotFound = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
  }}
  >
    <Box sx={{ width: '100%', margin: 'auto' }}>
      <img src={illustrationFile} alt="Illustration" />
    </Box>

    <Typography component="p" variant="h2" sx={{ textAlign: 'center' }}>Page Not Found</Typography>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1.5rem' }}>
      <Link to="/">
        <Button size="large" variant="contained" color="warning">Go to Home page</Button>
      </Link>
    </Box>
  </Box>
);

export default NotFound;
