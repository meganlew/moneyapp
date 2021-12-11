// Step 1 import react
import React from 'react';

// Step 2 create a component function that returns an element
const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const[result, setResult] = React.useState(null);

    const handleLogin = () => {
       console.log('User clicked Login', username, password);
       const body = {
         username: username,
         password: password,
       };
       // make an http call to java
       const settings = {
           method: 'post',
           body: JSON.stringify(body),
       }
       fetch('/api/login', settings)//built in
       .then(res => res.json())
       .then(data => {
          console.log(data)
          setResult(data); // what spark responds
       })
       .catch(console.log); //async try/catch
    };
    

    if(result !==null && result.isSuccess){
        return(
            <div class ="auth-content">
               <div class ="center">
               <h3> Welcome {username}!</h3>
               </div>
            </div>
        );
    }
    return(
        <div class="auth-content">
        <div>
            <h1 class="form-title">Login</h1>
            <div>
                <label >Username: </label>
                <input  input type="username" required name="username" placeholder="Username" class="text-input"
                value = {username} 
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password: </label>
                <input input type="password" required name="password" placeholder="Password" class="text-input"
            
                value= {password}
                onChange = {e => setPassword(e.target.value)}
                />
            </div>
            </div>
            
            <div>
                <button  type="submit"  class="btn btn-big" onClick = {handleLogin}>Login</button>
            </div>
            {(result !==null && result.isSuccess) && <div>{result.message}</div>}
        </div>
        
    );
};

// Step 3 
export default Login; // equivalent to "public" in java