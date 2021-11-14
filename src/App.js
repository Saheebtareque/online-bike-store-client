import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Explore from './Pages/Explore/Explore';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home> </Home>
            </Route>
            <Route exact path="/home">
              <Home> </Home>
            </Route>
            <Route exact path="/login">
              <Login> </Login>
            </Route>
            <Route path="/register">
             <Register> </Register>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard> </Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
