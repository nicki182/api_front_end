import React, {Component} from 'react'
import {LOGIN_USER} from "./graphql"
import Cookies from "universal-cookie/lib";
import {useMutation} from '@apollo/react-hooks'
/**
 * @return {boolean}
 */
function LogIn(){
        const inputref0=React.createRef()
        const inputref1=React.createRef()
        let inputLogIn = {
            name: String,
            password: String
        }
        const [logInUser, { data, error,loading}] = useMutation(LOGIN_USER);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if(data){
        if(data.logInUser!="verification error") {
            const cookie = new Cookies();
            cookie.set("auth_token", data.logInUser)
            window.location.href="/PAGE"
        }
        else{
            alert(data.logInUser)
        }
    }
        return (
                    <div>
                        <form
                            onSubmit={e => {
                                inputLogIn.name =inputref1.current.value
                                inputLogIn.password =inputref0.current.value
                                logInUser({variables: {type:inputLogIn}})}}>
                            <input
                               ref={inputref1}
                               placeholder="Enter name"
                            />
                            <input
                                ref={inputref0}
                                placeholder="Enter password"
                            />
                            <button type="submit">LOG IN</button>
                        </form>
                    </div>

        )
}
export default LogIn