// Step 1 import react
import React from 'react';
import NumberFormat from 'react-number-format';

// Step 2 create a component function that returns an element
// react hook
const Home = () => {
    const [username, setUsername] = React.useState('');
    const [usernameA, setUsernameA] = React.useState('');
    const [PaymentType, setPaymentType] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [text, setText] = React.useState('');
    const[result, setResult] = React.useState(null);

    const handleHome = () => {
       console.log(username, 'has sent money !');
       console.log(usernameA,'has recieved money !');
       console.log('Payment Type :', PaymentType)
       console.log(amount, 'amount has been sent !');
       console.log('message from :', username, text);
       const body = {
         username: username,
         usernameA: usernameA,
         PaymentType: PaymentType,
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
            <div class = "auth-content">
                <div>
                    <h1 class="center">Transaction Feed</h1>
                </div>
                <div class="left">
                <h4>Sender: {username}</h4>
                <h4>Reciever: {usernameA}</h4>
                <h4>Payment Type: {PaymentType}</h4>
                <h4>Amount: {amount}</h4>
                <h4>Message from {username}: "{text}".</h4> 
                </div>
            </div>
            
        );
    }
    return(
        <div class="auth-content">
        <div>
            <h1 class="form-title">Home</h1>
            <div>
                <label >Sender: </label>
                <input  input type="username" required name="username" placeholder="Enter Sender"class="text-input"
                value = {username} 
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Receiver: </label>
                <input input type="username" required name="username" placeholder="Enter Receiver" class="text-input"    
                value= {usernameA}
                onChange = {e => setUsernameA(e.target.value)}
                />
            </div>
            <div>
                <label>Payment Type: </label>

                <select id="PaymentType">
                    <option disabled selected value> -- select payment type -- </option>
                    <option value="cash">Cash</option>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                </select>
            </div>
            <div>
                <label>Amount: </label>
                
                <NumberFormat thousandSeparator={true} prefix={'$'}
                className="text-input"
                value= {amount}
                onChange = {e => setAmount(e.target.value)} 
                />
            </div>
            <div>
                <label>Notes: </label>
                <textarea input type="text" required name="text" placeholder="Add message" class="text-input"  
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