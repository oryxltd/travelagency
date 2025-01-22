import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* <Footer />  */}
      
    </div>
  );
};

export default App;
