import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import './Login.css'

function LoginForm(){
    const[username,setUserName] = useState("demo");
    const[password,setPassword] = useState(1234);
    const history = useHistory()
    function onSubmit(){
        setUserName(username);
        setPassword(password)
        history.push('/home')
    }

      return(
        <div id="loginform">
        <div className="row">
        <h2 id="headerTitle">Login</h2>
         <label>Username</label>
         <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="row">
         <label>Password</label>
         <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>  
        <div id="button" className="row">
        <button onClick={onSubmit}>Login</button>
        </div>
        </div>
      )
    
  }

export default LoginForm