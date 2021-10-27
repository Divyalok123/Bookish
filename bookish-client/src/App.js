import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import { Navbar, Home, Books } from './components/index';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/books" component={ Books }></Route>
        <Route path="/"></Route>
      </Switch>
      {/* <Home /> */}
    </div>
  );
}

export default App;
