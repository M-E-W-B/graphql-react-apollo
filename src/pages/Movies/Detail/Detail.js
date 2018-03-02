import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const DetailQuery = graphql(
  gql`
    query getDetail($id: String!) {
      getMovieById(_id: $id) {
        _id
        title
        year
        imdbId
        mtype
        poster
        createdAt
      }
    }
  `,
  {
    options: props => ({
      variables: {
        id: props.match.params.id
      }
    })
  }
);

class Detail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, history } = this.props;
    const { getMovieById: movie } = this.props.data;

    const rows = movie
      ? Object.keys(movie).map((key, i) => {
          return (
            <tr key={i}>
              <th>{key}</th>
              <td>{movie[key]}</td>
            </tr>
          );
        })
      : [];

    return <table>{rows}</table>;
  }
}

export default DetailQuery(withRouter(Detail));
