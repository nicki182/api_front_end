import React, {Component} from 'react';
import LogIn from "./logIn"
import Register from "./register"
import Frontpage from './frontpage'
import { Switch, Route,Redirect } from 'react-router-dom'
import Page from "./page";
class App extends Component{
        render() {
        return (
            <div className="center w85">
                <div className="ph3 pv1 background-gray">
                    <Switch>
                        <Route exact path="/" component={Frontpage}/>
                        <Route exact path="/LOG_IN" component={LogIn} />
                        <Route exact path="/REGISTER" component={Register} />
                        <Route exact path="/PAGE" component={Page} />
                    </Switch>
            </div>
        </div>
           )
    }
}

export default App;
