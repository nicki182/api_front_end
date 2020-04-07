import React,{Component} from 'react'
import {Mutation} from "@apollo/react-components";
import {LOGOUT_USER} from "./graphql";
import {Route, Switch} from "react-router-dom";
import Frontpage from "./frontpage";
import Cookies from "universal-cookie/lib";
class LogOut extends Component{
    constructor(props) {
        super(props);
        this.inputref0 = React.createRef()
        this.inputref1 = React.createRef()
    }

    render() {
        let inputLogIn = {
            name: String,
            password: String
        }
        return (
            <div>

            </div>
                );
    }
}
export default LogOut