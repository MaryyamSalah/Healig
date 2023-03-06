import './App.css';
import React  from 'react';
import {BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
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
     <div className ='App'>
     <Router>
<Routes>
        <Route exact path='/'  element={ <UserRoute/>} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register /> } />

        </Routes>
        </Router>
        </div>
    
  );
}

export default App;
