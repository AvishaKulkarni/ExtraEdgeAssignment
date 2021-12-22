import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/userSlice';
import "./LoginPage.css";

const LoginPage = () => {
    const[userid, setUserid] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name: userid,
                email:email,
                password:password,
                loggedIn: true,
            })
        );
    };
    return (
        <div className='login' >
          <form className='login_form' onSubmit={(e)=>handleSubmit(e)}>
              <h1>Login Here</h1>
              <input 
              type="name" 
              placeholder="Userid" 
              value={userid} 
              onChange={(e) => setUserid(e.target.value)}
              />
              <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              />
              <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              />
              <button className="submit_btn" type='submit'>
              Submit</button>   
          </form>
        </div>
    )
}

export default LoginPage;
