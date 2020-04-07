import React, {Component} from 'react'
import {LOGIN_USER} from "./graphql"
import {Mutation} from "@apollo/react-components"
import Cookies from "universal-cookie/lib";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {AUTH_TOKEN} from "../constants";

/**
 * @return {boolean}
 */
class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            login:"",
            password:""
        }
    }
    handleinput=(e)=>{
       this.setState({[e.target.name]: e.target.value})
}
    render() {
        let inputLogIn = {
            name: String,
            password: String
        }
        return (
            <Mutation mutation={LOGIN_USER}>
                {(logInUser, {data}) => (
                    <div>
                        <form
                            onSubmit={async e => {
                                inputLogIn.name = this.state.login
                                inputLogIn.password = this.state.password
                                logInUser({variables: {type:{name:this.state.login,password:this.state.password}}})
                            }}>
                            <input
                                onChange={(e)=>this.handleinput(e)}
                                placeholder="Enter name"
                                value={this.state.login}
                                name="login"
                                type="input"
                            />
                            <input
                                onChange={(e)=>this.handleinput(e)}
                                placeholder="Enter name"
                                value={this.state.password}
                                name="password"
                                type="input"
                                placeholder="Enter password"
                            />
                            <button type="submit">LOG IN</button>
                        </form>
                    </div>
                )}
            </Mutation>

        )
    }
}
export default LogIn