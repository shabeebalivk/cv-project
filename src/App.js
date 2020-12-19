import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Create from './components/Create';
import View from './components/View';
import Edit from './components/Edit';


function App() {
  return (
    <Router>
    <div>
       <Header />
      <Switch>
        <Route path="/view">
          <View />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
