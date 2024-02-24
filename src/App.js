import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './Pages/LoginPage/Register/Register';
import Login from './Pages/LoginPage/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Products from './Pages/Products/Products/Products';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ProductBooking from './Pages/Shared/ProductBooking/ProductBooking';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
//faisal pull request-test
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/productBooking/:Pid'>
            <ProductBooking></ProductBooking>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
