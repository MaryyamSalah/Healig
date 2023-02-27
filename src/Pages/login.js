import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate ,Link} from 'react-router-dom'
import { loginInitiate } from '../Redux/action';
const Login = () => {
    const [state,setState]=useState({
        email:'',
       password:'',
      })
      const {email,password}=state;
      const {currentUser} = useSelector(state => state.user);
      const history = useNavigate();
      useEffect(()=>{
        if(currentUser){
          history.push("/");
        }

      },[currentUser,history])

      const dispatch =useDispatch();







    const handleGoogleSignIn= ()=>{}
    const handleFBSignIn= ()=>{}
    
    const handleSubmit= (e)=>{
      e.preventDefault();
      if(!email || !password){
        return;
      }
      dispatch(loginInitiate(email,password))
      setState({email: "",password: ""})
    };

    const handleChange= (e)=>{
      let {name,value} = e.target
      setState({...state,[name]:value})
    }
    
      
      
      
     
      
    return (
        <div>
          <div id='logreg-from'>
            <form className='form-signin' onSubmit={handleSubmit}>
               <h1>signin</h1>
               <div>
                 <button type='button' onClick={handleGoogleSignIn}>
                  <span>
                    <i className='fab fa-google-plus-g '>sign in with google</i>
                  </span>
                 </button>
                 <button type='button' onClick={handleFBSignIn}>
                  <span>
                    <i className='fab fa-google-plus-g '>sign in with Facebook</i>
                  </span>
                 </button>
                 <p>or</p>
                 <input 
                 type='email'
                id='inputEmail'
                placeholder='EmailAddress'
                name='email'
                onChange={handleChange}
                 value={email}
                required
                 />
                 <input 
                 type='password'
                id='inputpassword'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={password}
                required
                 />
                 <button type='submit'>sign In</button>
                 <hr/>
                 <p>Don't have account</p>
                 <Link to='/register'> 
                  <button type='submit'>sign Up new account</button>
                 </Link>
               </div>
            </form>
           </div>
        </div>
      )
    }
    
    export default Login
    
