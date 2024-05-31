  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import ItemPage from './components/ItemPage';
  import LandingPage from './components/LandingPage';
  import RegisterPage from './components/RegisterPage';
  import Verification from './components/Verification';

  function App() {
    return (
      <Router>
        <Routes>
        <Route path="/a" element={<LandingPage/>} />
          <Route path="/home" element={<ItemPage/>} />        
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/verification" element={<Verification/>} />
        </Routes>
      </Router>
    );
  }

  export default App;
