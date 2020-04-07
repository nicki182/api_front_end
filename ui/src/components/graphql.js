import {gql} from "apollo-boost"
const REGISTER_USER=gql`
mutation Register($type:inputRegister!)
{
registerUser(type:$type){
token
}
}
`;
const LOGIN_USER=gql`
mutation LogIn ($type:inputLogIn!)
{
 logInUser(type:$type)
}
`
const LOGOUT_USER=gql`
mutation LogOut($token:String)
{
logOutUser(token:$token)
}
`
const DELETE_USER=gql`
mutation Delete($name:String,$token:String)
{
deleteUser(name:$name,token:$token)
}
`
export {
    REGISTER_USER,
    LOGIN_USER,
    DELETE_USER,
    LOGOUT_USER
};