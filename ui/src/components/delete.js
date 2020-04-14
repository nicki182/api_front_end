import React,{Component} from 'react'
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
}
export default Delete
