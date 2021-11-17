// Step 1 import react
import React from 'react';

// Step 2 create a component function that returns an element
const Home = () => {
    const [username, setUsername] = React.useState('');
    const [usernameA, setUsernameA] = React.useState('');
    const[result, setResult] = React.useState(null);

    const handleHome = () => {
       console.log(username, 'has sent money !');
       console.log(usernameA,'has recieved money !');
       const body = {
         username: username,
         usernameA: usernameA,
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
            <h1>Home</h1>
            <div>
                <h3>Sender</h3>
                <input 
                value = {username} 
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <h3>Reciever</h3>
                <input 
                value= {usernameA}
                onChange = {e => setUsernameA(e.target.value)}
                />
            </div>
            <div>
                <button onClick = {handleHome}>Send Amount</button>
            </div>
            {(result !==null && result.isSuccess) && <div>{result.message}</div>}
        </div>
    );
};

// Step 3 
export default Home; // equivalent to "public" in java


