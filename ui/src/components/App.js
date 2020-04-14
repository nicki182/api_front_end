import React, {Component} from 'react';
import LogIn from "./logIn"
import Register from "./register"
import Frontpage from './frontpage'
import { Switch, Route,Redirect } from 'react-router-dom'
import Page from "./page";
import Delete from "./delete";
import LogOut from "./logOut";
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
                        <Route exact path="/DELETE" component={Delete}/>
                        <Route exact path="/LOG_OUT" component={LogOut}/>
                    </Switch>
            </div>
        </div>
           )
    }
}

export default App;
