import React, {Component} from 'react'
import {REGISTER_USER} from "./graphql"
import {useMutation} from '@apollo/react-hooks'
import Cookies from "universal-cookie/lib";
/**
 * @return {boolean}
 */
function Register(){
        const inputref0=React.createRef()
        const inputref1=React.createRef()
        const inputref2=React.createRef()
        const inputref3=React.createRef()
        let inputRegister={
            name:String,
            country:String,
            email:String,
            password:String,
        }
        const [registerUser,{data,loading,error}]=useMutation(REGISTER_USER)
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if(data){
            const cookie = new Cookies();
            cookie.set("auth_token", data.registerUser)
            window.location.href="/PAGE"
        }
        return (
                    <div>
                        <form
                            onSubmit={e => {
                                inputRegister.name=inputref0.current.value
                                inputRegister.country=inputref1.current.value
                                inputRegister.email=inputref2.current.value
                                inputRegister.password=inputref3.current.value
                                registerUser({variables: {type:inputRegister}});
                            }}
                        >
                            <input
                                ref={inputref0}
                                placeholder="Enter name"
                            />
                            <input
                                ref={inputref1}
                                placeholder="Enter country"
                            />
                            <input
                                ref={inputref2}
                                placeholder="Enter email"
                            />
                            <input
                                ref={inputref3}
                                placeholder="Enter password"
                            />
                            <button type="submit">REGISTER </button>
                        </form>
                    </div>
                )}
export default Register