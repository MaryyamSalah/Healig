import './App.css';
import React  from 'react';
import {BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home/home';
import Login from './Pages/LogIn/login';
import Register from './Pages/Register/register';
import Header from './Pages/Header/header';
import About from './Pages/About/about';
import Contact from './Pages/Contacts/contact';
import Blogs from './Pages/Blogs/blogs';
import BlogDetails from './Pages/Blogs/blogDetails';
import Footer from './Pages/Footer/footer'
// import UserRoute from './Components/UserRoute';
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
     <Header></Header>
<Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register /> } />

        </Routes>
        <Footer/>
        </Router>
        </div>
    
  );
}

export default App;
