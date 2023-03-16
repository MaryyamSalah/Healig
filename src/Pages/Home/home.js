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
       <button className=" absolute right-10 top-0 px-4 py-2  my-10 text-white hover:text-black  rounded-md shadow hover:bg-gray-100" onClick={handleAuth}>Log Out</button>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Welcome to our website</h1>
        <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite '>We are here to healing you.</p> 

        <Link to ='/posts' className=" px-4 py-2 text-white hover:text-black border hover:border-purple-900 bg-purple-900 rounded-md shadow hover:bg-gray-100">
        View Posts
        </Link>
       
    </section>
      
   
  )
}

export default Home
