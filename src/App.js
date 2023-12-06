import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Setup from './pages/Setup';
import DTable from './component/table';
import Sidebar from './component/sidebar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='table' element={<DTable/>}></Route>
        <Route path='side' element={<Sidebar/>}></Route>
        <Route path='setup' element={<Setup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
