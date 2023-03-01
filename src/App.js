import './App.css';
import { Router,Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';
import UserRoute from './Components/UserRoute';

function App() {
  return (
    <Router>
     
    <div className="App">
    <Routes>
    <Route exact path='/' element={<UserRoute />} >
    <Route exact path='/' element={<Home />}/>
          </Route>
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />


      </Routes>
    </div>
   
    </Router>
  );
}

export default App;
