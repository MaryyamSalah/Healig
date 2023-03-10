import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { logoutInitiate } from '../../Redux/action';
import RecentBlogs from './recentBlogs'

const Home = () => {
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleAuth= ()=>{
    if(currentUser){
      dispatch(logoutInitiate());
    }
  }
  return (
    <div>
       <h1>welcome to home</h1>
      <RecentBlogs />
      <button onClick={handleAuth}>logout</button>
    </div>
  )
}

export default Home
