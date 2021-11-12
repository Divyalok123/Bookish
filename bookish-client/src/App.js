import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  Navbar, 
  Home, 
  Books, 
  About, 
  Profile, 
  UserBooks,
  AddBook,
  SignUp,
  Login
} from './components/index';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/books" component={Books}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/signin" component={Login}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/mybooks">
          <UserBooks optionSelected="all" page="mybooks" />
        </Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/favourites">
          <UserBooks optionSelected="all" page="favourites" />
        </Route>
        <Route path="/addbook" component={AddBook}></Route>
      </Switch>
    </div>
  );
}

export default App;
