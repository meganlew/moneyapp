// Step 1 import react
import React from 'react';

// Step 2 create a component function that returns an element
const Home = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const[result, setResult] = React.useState(null);

    const handleSignUp = () => {
       console.log('User has sent money !', username, password);
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
            <h1 class="form-title">Home</h1>
            <div>
            <label>Sender: </label>
                <input type="Sender" required name="Sender" class="text-input"
                value = {username} 
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Reciever</label>
                <input type="password" required name="password" class="text-input"
                value= {password}
                onChange = {e => setPassword(e.target.value)}
                />
            </div>
            </div>
            <div>
                <button  type="submit"  class="btn btn-big" onClick = {handleSignUp}>Send Amount</button>
            </div>
            {(result !==null && result.isSuccess) && <div>{result.message}</div>}
        </div>
    );
};

// Step 3 
export default Home; // equivalent to "public" in java

