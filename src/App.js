import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'
import FAQs from './components/FAQs/FAQs'
import AuthProvider from './Context/AuthProvider'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path='/aboutUs'>
              <AboutUs></AboutUs>
            </PrivateRoute>

            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute exact path='/faqs'>
              <FAQs></FAQs>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
