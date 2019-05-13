import React from 'react'
import {Switch,Route} from "react-router-dom";
import Profile from './page/Profile';
import Contact from './page/Contact';
import Portofolio from './page/Portofolio';
import Home from './page/Home';

class Content extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/portofolio" component={Portofolio}/>
            </Switch>
        )
    }
}

export default Content;