import React, {Component, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from "react-router";
import {useMutation} from "@apollo/react-hooks";
import {DELETE_USER, LOGOUT_USER} from "./graphql";
import Cookies from "universal-cookie/lib";
function useLogOut() {
    const cookie=new Cookies()
    const [logOutUser, {loading, error, data}] = useMutation(LOGOUT_USER)
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if (data) {
        cookie.remove("auth_token")
        window.location.href = "/"
    }
    return logOutUser
}
function useDelete() {
    const cookie=new Cookies()
    const [deleteUser, {loading, error, data}] = useMutation(DELETE_USER)
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if (data) {
        if(data.deleteUser){
            cookie.remove("auth_token")
            window.location.href = "/"
        }
    else
        {
            alert("Session Expired")
            cookie.remove("auth_token")
            window.location.href = "/"
        }
    }
    return deleteUser
}
function Page (){
      const logOutUser=useLogOut()
      const deleteUser=useDelete()
    const cookie=new Cookies()
    if(cookie.get("auth_token")==null)
    {
        alert("USER HAVE NOT REGISTERED OR LOGGED IN")
        return window.location.href="/"
    }
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <Link onClick={()=>{
                        const token=cookie.get("auth_token")
                        logOutUser({variables:{token:token}})
                    }} className="ml1 no-underline black">
                        LOG OUT
                    </Link>
                    <div className="ml1"></div>
                    <Link onClick={()=>{
                        const token=cookie.get("auth_token")
                        deleteUser({variables:{token:token}})
                    }}className="ml1 no-underline black">
                        DELETE
                    </Link>
                </div>
            </div>
        )
}
export default withRouter(Page)