import React,{Component} from 'react'
<<<<<<< HEAD
import {DELETE_USER} from "./graphql";
import {useMutation} from "@apollo/react-hooks"
import Cookies from "universal-cookie/lib";
function Delete (){
    const inputDelete=React.createRef()
        const [deleteUser,{loading,error,data}]=useMutation(DELETE_USER)
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if(data){
        window.location.href="/"
    }
    return (
                                <div>
                        </div>

            );
=======
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
>>>>>>> origin/master
}
export default Delete
