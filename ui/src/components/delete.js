import React,{Component} from 'react'
import {Mutation} from "@apollo/react-components";
import {DELETE_USER} from "./graphql";
import Frontpage from "./frontpage";
class Delete extends Component {
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
            <Mutation mutation={DELETE_USER}>
                {(logInUser, {data}) => (
                    <div>
                        <form>
                        </form>
                    </div>
                )}
            </Mutation>
            );
    }
}
export default Delete
