// React
import { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// MUI Components
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Data
import courses from '../../data/courses';

const Course = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentCourse = courses.find(({ id }) => id === courseId);

    if (!currentCourse) navigate('/', { replace: true });

    setCourse(currentCourse);
  });

  const handleBackButton = (event) => {
    event.preventDefault();
    event.stopPropagation();

    navigate(-1);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" sx={{ mb: '2.5rem', textAlign: 'center', fontWeight: 'bold' }}>
            {course?.name}
          </Typography>

          {course?.learnedPoints.map(({ title, description }, idx) => (
            <Fragment key={idx}>
              <Typography gutterBottom variant="p" component="h3" sx={{ fontWeight: 'bold' }}>
                {title}
              </Typography>

              <Typography gutterBottom variant="p" component="p" sx={{ mb: '2rem' }}>
                {description}
              </Typography>
            </Fragment>
          ))}

          <Typography
            gutterBottom
            variant="p"
            component="h3"
            sx={{
              mt: '2rem', fontWeight: 'bold',
            }}
          >
            Task
          </Typography>

          {course?.tasks.map(({ title, description }, idx) => (
            <Fragment key={idx}>
              <Typography gutterBottom variant="p" component="h4" sx={{ fontWeight: 'bold' }}>
                {`${idx + 1}. ${title}`}
              </Typography>

              <Typography gutterBottom variant="p" component="p" sx={{ mb: '2rem' }}>
                {description}
              </Typography>
            </Fragment>
          ))}

          <Typography
            gutterBottom
            variant="p"
            component="h3"
            sx={{
              mt: '2rem', fontWeight: 'bold',
            }}
          >
            Link :
          </Typography>

          {course?.links.map(({ url, name }, idx) => (
            <Fragment key={idx}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', marginBottom: '.25rem' }}
              >
                <Typography gutterBottom variant="span" component="span" sx={{ textDecoration: 'underline' }}>
                  {name}
                </Typography>
              </a>
            </Fragment>
          ))}

          {course?.screenshots.length > 0 && (
            <Typography
              gutterBottom
              variant="p"
              component="h3"
              sx={{
                mt: '2rem', fontWeight: 'bold',
              }}
            >
              Screenshots :
            </Typography>
          )}

          {course?.screenshots.map((imgFile, idx) => (
            <img key={idx} src={imgFile} alt={`preview-${idx + 1}`} />
          ))}
        </CardContent>

        <CardActions>
          <a href="/" onClick={handleBackButton}>
            <Button size="small" variant="contained" color="warning" sx={{ ml: '1rem', mb: '1rem' }}>Back</Button>
          </a>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Course;
