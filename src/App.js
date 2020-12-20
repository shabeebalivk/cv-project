import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Create from './components/Create';
import View from './components/View';
import Edit from './components/Edit';
import Tag from './components/Tag';


function App() {
  return (
    <Router>
    <div>
       <Header />
      <Switch>
        <Route path="/view">
          {/* <Tag /> */}
          <View />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/">
          <Redirect to="/create" />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
