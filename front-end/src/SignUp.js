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
        <div>
            <h1>Sign Up</h1>
            <div>
                <input 
                value = {username} 
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input 
                type = "password" 
                value= {password}
                onChange = {e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick = {handleSignUp}>Sign Up</button>
            </div>
            {(result !==null && result.isSuccess) && <div>{result.message}</div>}
        </div>
    );
};

// Step 3 
export default SignUp; // equivalent to "public" in java