import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import P from './Optimizeway/P';
function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/p" element={<P/>} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
