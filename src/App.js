import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import isLoggedIn from "./auth";

import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound/NotFound";

import { ApolloProvider } from "react-apollo";
import client from "./apollo-client";

class App extends Component {
  render() {
    const appUrl = "";

    const checkAuthentication = ComponentToBeRendered => {
      if (isLoggedIn()) {
        return ComponentToBeRendered;
      } else {
        window.location.href = "/login";
      }
    };

    return (
      <ApolloProvider client={client}>
        <div>
          <Router>
            <Route path={appUrl}>
              <Switch>
                <Route
                  path={`${appUrl}/movies`}
                  component={checkAuthentication(Movies)}
                />
                <Route component={NotFound} />
              </Switch>
            </Route>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
