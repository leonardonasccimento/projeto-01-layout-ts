import { Route, Routes } from 'react-router-dom';
import Bookmark from './pages/Bookmark';
import Contact from './pages/Contact';
import Fylo from './pages/Fylo';
import Home from './pages/Home';
import Insure from './pages/Insure';
import Manage from './pages/Manage';
import Portfolio from './pages/Portfolio';

function HomeRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/manage' element={<Manage />} />
      <Route path='/bookmark' element={<Bookmark />} />
      <Route path='/insure' element={<Insure />} />
      <Route path='/fylo' element={<Fylo />} />
    </Routes>
  )
}

export default HomeRoutes;
