import './App.css';
// third party, found in package.json
import { Link , Switch, Route} from 'react-router-dom'; 

import Home from './Home'; //relative path
import SignUp from './SignUp';
import Feed from './Feed';
import Login from './Login';


function App() {
  return (
    
    <div>
      <header>
      <div class="logo">
        <h1 class="logo text">
          <Link to = "/Feed"><span>Money App</span></Link>
          </h1>
      </div>
       <i class="fa fa-bars menu-toggle"></i>
      <ul class="nav">
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/Feed">Feed</Link></li>
        <li><Link to = "/Login">Login</Link></li>
        <li><Link to = "/sign-up">Sign Up</Link></li>
      </ul>
      </header>
    <Switch>
     <Route path = "/Feed" component ={Feed} />
      <Route path = "/sign-up" component ={SignUp} />
      <Route path = "/Login" component ={Login} />
      <Route path = "/">
        <Home/>
      </Route>
    </Switch>
    </div>
    
  
  );
}

export default App;
