import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import { Navbar, Home, Books, Registration, Authors, About, Profile } from './components/index';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/books" component={ Books }></Route>
        <Route path="/registration" component={ Registration }></Route>
        <Route path="/about" component={ About }></Route>
        <Route path="/authors" component={ Authors }></Route>
        <Route path="/profile" component={ Profile }></Route>
      </Switch>
    </div>
  );
}

export default App;
