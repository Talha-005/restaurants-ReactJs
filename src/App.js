import { BrowserRouter as Router, Route } from 'react-router-dom';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantList from './components/RestaurantList';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantSearch from './components/RestaurantSearch';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Protected from './components/Protected';
import './App.css';

function App() {
  return (
    <>
      <Router>

        <Protected path='/create' component={RestaurantCreate} />
        <Protected path='/update/:id' component={RestaurantUpdate} />

        <Route path='/search'><RestaurantSearch /></Route>
        <Route path='/list'><RestaurantList /></Route>
        <Route path='/logout'><Logout /></Route>
        <Route path='/login/' render={props => (<Login {...props} />)} />
        <Route exact path='/'><Home /></Route>

        {/* <Route path='/update/:id' render={props => (<RestaurantUpdate {...props} />)} /> */}
        {/* <Protected path='/list' component={RestaurantList} /> */}
        {/* <Protected path='/search' component={RestaurantSearch} /> */}
      </Router>
    </>
  );
}

export default App;
