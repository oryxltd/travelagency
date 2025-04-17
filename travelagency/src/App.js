import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import PackageDetails from './pages/PackageDetails';
import Inquiry from './components/Inquiry';

import './App.css';
import DestinationDetail from './pages/DestinationDetails';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path='/destination/:id' element={<DestinationDetail />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
