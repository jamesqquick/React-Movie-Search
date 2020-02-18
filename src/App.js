import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './pages/profile';
import FourOhFour from './pages/404';
import Home from './pages/home';
import Header from './components/header';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/*" component={FourOhFour} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
