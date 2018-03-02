import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import List from "./List";
import Create from "./Create";
import Detail from "./Detail";

import "./Movies.css";

class Movies extends Component {
  render() {
    const { url } = this.props.match;

    return (
      <div className="movies">
        <Switch>
          <Route exact path={url} component={List} />
          <Route exact path={url + "/create"} component={Create} />
          <Route path={url + "/:id"} component={Detail} />
        </Switch>
      </div>
    );
  }
}

export default Movies;
