import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Blog from './views/Blog';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path={"/blog/:id"}>
                    <Blog />
                </Route>
                <Route exact path={"/blog"}>
                    <Blog />
                </Route>
                <Route exact path={"/contact/:category/nivel/:nivel/:order"} component={Contact} />
                <Route exact path={"/contact"} component={Contact} />
                <Route exact path={"/about/category/:category"} component={About} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/"} component={Home} />
                <Route component={NotFound} render={() => {
                    return (
                        <h1>Page Not Found</h1>
                    )
                }}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Layout;