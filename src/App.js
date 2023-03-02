import React ,{useEffect} from 'react';
import './App.css';
import {BrowserRouter,Routes, Route  } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';
import UserRoute from './Components/UserRoute';
// import { useDispatch } from 'react-redux';
// import {auth} from './firebase';
// import { setUser } from './Redux/action';

function App() {
  // const dispatch = useDispatch();
  // useEffect (()=>{
  //   auth.onAuthStateChanged((authUser)=>{
  //     if(authUser){
  //       dispatch(setUser(authUser));}
  //       else{
  //         dispatch(setUser(null))
        
  //     }
  //   })

  // },[dispatch])
  return (
     
     
  <BrowserRouter>
  <div className="App">
        <Routes>
        <UserRoute exact path='/'  element={ <Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register /> } />
    
        </Routes>
        </div>
        </BrowserRouter>
    
  );
}

export default App;
