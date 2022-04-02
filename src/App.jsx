// React
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// Screens Components
import Home from './screens/Home';
import Course from './screens/Course';
import NotFound from './screens/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="courses">
        <Route index element={<Navigate to="/" replace />} />
        <Route path=":courseId" element={<Course />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>

);

export default App;
