import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { logoutInitiate } from '../../Redux/action';
import RecentBlogs from './recentBlogs';
import {Link} from 'react-router-dom';

const Home = () => {
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleAuth= ()=>{
    if(currentUser){
      dispatch(logoutInitiate());
    }
  }
  return (
    <section>
        <h1>Dashboard</h1>
        <p>This is the dashboard.</p>

        <Link to ='/posts' className ="button">
        View Posts
        </Link>
        <button onClick={handleAuth}>logout</button>
    </section>
      
   
  )
}

export default Home
