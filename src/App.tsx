import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemPage from './components/ItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemPage/>} />        
      </Routes>
    </Router>
  );
}

export default App;
