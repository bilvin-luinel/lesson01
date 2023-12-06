import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NccDp from './Pages/NccDp';
import Detail from './Pages/Detail';
import Admin from './Pages/Admin';
import Dolim from './Pages/Dolim';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nccdp' element={<NccDp />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/admin/:id' element={<Admin />} />
        <Route path='/dolim' element={<Dolim />} />
      </Routes>
    </div>
  );
}

export default App;