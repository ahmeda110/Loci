import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemPage from './components/ItemPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemPage/>} />        
        <Route path="/landing" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
