
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
          <Switch>
             <Route exact path="/home">
              <Home></Home>
            </Route>
           
            <Route path="/login">
              <Login></Login>
            </Route>
             <Route path="/register">
              <Register></Register>
            </Route> 
             <Route path="*">
              <NotFound></NotFound>
            </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
