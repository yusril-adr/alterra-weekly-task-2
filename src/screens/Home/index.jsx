// React
import { Link } from 'react-router-dom';

// MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Data
import courses from '../../data/courses';

const Home = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: '2rem' }}>Courses</Typography>

    <Grid container spacing={4}>
      {courses.map((course) => (
        <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              image="/images/placeholder.png"
              alt={course.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3" className="text-ellipsis">
                {course.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/courses/${course.id}`}>
                <Button size="small">Detail</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Home;
