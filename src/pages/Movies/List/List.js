import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const ListQuery = graphql(gql`
  {
    getMovies {
      _id
      title
      year
      imdbId
      mtype
      poster
      createdAt
    }
  }
`);

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, history } = this.props;
    const { getMovies: movies } = this.props.data;
    const rows = movies
      ? movies.map((movie, i) => {
          return (
            <tr key={i}>
              <td>
                <a href={"movies/" + movie._id}>{movie._id}</a>
              </td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.imdbId}</td>
              <td>{movie.mtype}</td>
              <td>{movie.poster}</td>
              <td>{movie.createdAt}</td>
            </tr>
          );
        })
      : [];

    return (
      <div>
        <button
          onClick={() => {
            history.push(`${match.url}/create`);
          }}
        >
          Add Movie
        </button>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Year</th>
            <th>ImdbID</th>
            <th>Type</th>
            <th>Poster</th>
            <th>Created At</th>
          </tr>
          {rows}
        </table>
      </div>
    );
  }
}

export default ListQuery(withRouter(List));
