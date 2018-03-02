import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const createMovieMutation = graphql(
  gql`
    mutation CreateMovie(
      $title: String!
      $year: Int
      $imdbId: String!
      $mtype: MovieType
      $poster: String
    ) {
      createMovie(
        title: $title
        year: $year
        imdbId: $imdbId
        mtype: $mtype
        poster: $poster
      ) {
        year
        mtype
        poster
      }
    }
  `,
  { name: "createMovieMutation" }
);

class Create extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();

    const { createMovieMutation } = this.props;
    const formData = new FormData(e.target);
    const variables = {};

    for (const pair of formData.entries()) {
      variables[pair[0]] = pair[1];
    }

    createMovieMutation({
      variables
    }).then(result => {
      console.log("Movie has been created successfully!");
    });
  };

  render() {
    const handleSubmit = this.handleSubmit;
    return (
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" /> <br />
        <label>Year</label>
        <input type="number" name="year" /> <br />
        <label>Imdb ID</label>
        <input type="text" name="imdbId" /> <br />
        <label>Type</label>
        <input type="text" name="mtype" /> <br />
        <label>Poster</label>
        <input type="text" name="poster" /> <br />
        <input type="submit" value="Create" />
      </form>
    );
  }
}

export default compose(createMovieMutation)(Create);
