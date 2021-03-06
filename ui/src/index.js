import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./components/App"
import {ApolloClient,HttpLink,InMemoryCache,ApolloLink } from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
import {graphql} from "graphql";
const client = new ApolloClient({
    link: new HttpLink({uri: "http://localhost:4001/graphql"}),
    cache: new InMemoryCache()});
ReactDOM.render(
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>,
        document.getElementById('root')
    )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
