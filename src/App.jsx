// React
import { Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// Screens Components
import Home from './screens/Home';
import NotFound from './screens/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>

);

export default App;
