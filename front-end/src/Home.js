// Step 1 import react
import React from 'react';
import NumberFormat from 'react-number-format';

// Step 2 create a component function that returns an element
const Home = () => {
    const [username, setUsername] = React.useState('');
    const [usernameA, setUsernameA] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [text, setText] = React.useState('');
    const[result, setResult] = React.useState(null);

    const handleHome = () => {
       console.log(username, 'has sent money !');
       console.log(usernameA,'has recieved money !');
       console.log(amount, 'amount has been sent !');
       console.log('message from :', username, text);
       const body = {
         username: username,
         usernameA: usernameA,
         amount: amount,
         text: text,
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
                <label >Sender: </label>
                <input  input type="username" required name="username" class="text-input"
                value = {username} 
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Reciever: </label>
                <input input type="username" required name="username" class="text-input"    
                value= {usernameA}
                onChange = {e => setUsernameA(e.target.value)}
                />
            </div>
            <div>
                <label>Amount: </label>
                <NumberFormat thousandSeparator={true} prefix={'$'}
                value= {amount}
                onChange = {e => setAmount(e.target.value)} 
                />
            </div>
            <div>
                <label>Notes: </label>
                <textarea input type="text" required name="text" class="text-input"  
                onChange={e => setText(e.target.value)}></textarea>  
            </div>
            </div>
            
            <div>
                <button  type="submit"  class="btn btn-big" onClick = {handleHome}>Send Amount</button>
            </div>
            {(result !==null && result.isSuccess) && <div>{result.message}</div>}
        </div>
        
    );
};

// Step 3 
export default Home; // equivalent to "public" in java