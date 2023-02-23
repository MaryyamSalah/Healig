import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate ,Link} from 'react-router-dom'
import { registerInitiate } from '../Redux/action';

const Register = () => {
    const [state,setState]=useState({
      displayName:'',
        email:'',
       password:'',
       passwordConfirm:''
      });

      const {currentUser} = useSelector(state => state.user);
      const history = useNavigate();
      useEffect(()=>{
        if(currentUser){
          history.push("/");
        }

      },[currentUser,history])

      const dispatch =useDispatch();
      const {email,password,displayName,passwordConfirm}=state;
    
    
    const handleSubmit= (e)=>{
      e.preventDefault();
      if(password !== passwordConfirm){
        return;

      }
      dispatch(registerInitiate(email,password,displayName));
      setState({email:"",displayName:"",password:"",passwordConfirm:""})
    };
    const handleChange= (e)=>{
      let {name,value} = e.target
      setState({...state,[name]:value})
    }
    
      
      
      
     
      
    return (
        <div>
          <div id='logreg-from'>
            <form className='form-signup' onSubmit={handleSubmit}>
               <h1>signUp</h1>
               <input 
                 type='text'
                id='displayName'
                placeholder='Full Name'
                name='displayName'
                onChange={handleChange}
                 value={displayName}
                required
                 />
                
                
                
                
                 <input 
                 type='email'
                id='userEmail'
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
                  <input 
                 type='password'
                id='passwordConfirm'
                placeholder='Reapet Password'
                name='passwordConfirm'
                onChange={handleChange}
                value={passwordConfirm}
                required
                 />



                 
                 <button type='submit'>sign Up</button>
                 <Link to='/login'>back</Link>
              
            </form>
           </div>
        </div>
      )
    }
    
    export default Register
    

