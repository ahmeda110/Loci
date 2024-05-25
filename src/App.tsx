import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemPage from './components/ItemPage';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import Verification from './components/Verification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemPage/>} />        
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/verification" element={<Verification/>} />
      </Routes>
    </Router>
  );
}

export default App;
