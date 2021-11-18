// Step 1 import react
import React from 'react';

// Step 2 create a component function that returns an element
const SignUp = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const[result, setResult] = React.useState(null);

    const handleSignUp = () => {
       console.log('User clicked sign up', username, password);
       const body = {
         username: username,
         password: password,
       };
       // make an http call to java
       const settings = {
           method: 'post',
           body: JSON.stringify(body),
       }
       fetch('/api/sign-up', settings)//built in
       .then(res => res.json())
       .then(data => {
          console.log(data)
          setResult(data); // what spark responds
       })
       .catch(console.log); //async try/catch
    };

    if(result !==null && result.isSuccess){
        return(
            <div>
                Welcome {username}!
            </div>
        );
    }
    return(
        <div class="auth-content">
        <div>
            <h1 class="form-title">Sign Up</h1>
            <div>
                <label >Username: </label>
                <input  input type="username" required name="username" class="text-input"
                value = {username} 
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password: </label>
                <input input type="password" required name="password" class="text-input"
            
                value= {password}
                onChange = {e => setPassword(e.target.value)}
                />
            </div>
            </div>
            
            <div>
                <button  type="submit"  class="btn btn-big" onClick = {handleSignUp}>Sign Up</button>
            </div>
            {(result !==null && result.isSuccess) && <div>{result.message}</div>}
        </div>
        
    );
};

// Step 3 
export default SignUp; // equivalent to "public" in java