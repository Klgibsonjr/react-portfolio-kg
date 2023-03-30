import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='bg-slate-200 h-[100vh]'>
        <Header />
        <Routes>
          <Route path='/react-portfolio-kg' element={<Home />} />
          <Route path='/react-portfolio-kg/about' element={<AboutMe />} />
          <Route path='/react-portfolio-kg/contact' element={<ContactMe />} />
          <Route path='/react-portfolio-kg/portfolio' element={<Portfolio />} />
          <Route path='/react-portfolio-kg/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
