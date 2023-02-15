import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />


      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
