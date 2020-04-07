import React, {Component} from 'react'
import {REGISTER_USER} from "./graphql"
import {Mutation} from "@apollo/react-components"
import {Link} from "react-router-dom";
/**
 * @return {boolean}
 */
class Register extends Component {
    constructor(props) {
        super(props);
        this.inputref0=React.createRef()
        this.inputref1=React.createRef()
        this.inputref2=React.createRef()
        this.inputref3=React.createRef()
    }
    render() {
        let inputRegister={
            name:String,
            country:String,
            email:String,
            password:String,
        }
        return (
            <Mutation mutation={REGISTER_USER}>
                {(registerUser, {data}) => (
                    <div>
                        <form
                            onSubmit={e => {
                                inputRegister.name=this.inputref0.current.value
                                inputRegister.country=this.inputref1.current.value
                                inputRegister.email=this.inputref2.current.value
                                inputRegister.password=this.inputref3.current.value
                                registerUser({variables: {type:inputRegister}});
                            }}
                        >
                            <input
                                ref={this.inputref0}
                                placeholder="Enter name"
                            />
                            <input
                                ref={this.inputref1}
                                placeholder="Enter country"
                            />
                            <input
                                ref={this.inputref2}
                                placeholder="Enter email"
                            />
                            <input
                                ref={this.inputref3}
                                placeholder="Enter password"
                            />
                            <Link to="/Page">
                            <button type="submit">REGISTER </button>
                        </Link>
                        </form>
                    </div>
                )}
            </Mutation>
        );
    }
}
export default Register