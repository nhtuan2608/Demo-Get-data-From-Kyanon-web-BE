import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Data from "./Data";
const client = new ApolloClient({
  uri: "https://kyanon-site-2019-be.herokuapp.com/graphql"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
          </nav>
          <div>
            <Data />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
