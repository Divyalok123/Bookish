import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Books, About, Profile, UserBooks, AddBook, SignUp, Login, NotFound, ProfileUpdate } from './components/index';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./App.css";

function App() {

    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
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
                    <Route path="/updateprofile" component={ProfileUpdate}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
            <ToastContainer 
                limit={2} 
                autoClose={2000} 
                draggable 
                pauseOnHover 
                closeOnClick 
                hideProgressBar
                theme="dark" 
                position="bottom-right"
                pauseOnFocusLoss={false}
            />
        </div>
    );
}

export default App;
