const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { formatError } = require("apollo-errors");
const schema = require("../graphql/schema");
const { Movie } = require("./models");

const SAMPLE_QUERY = `
  query test_query {
    getMovies {
      _id
      title
      year
      mtype
      poster
    }

    getMovieById(_id: "5a95459537c2fc11e021ca5f") {
      year
      mtype
      poster
    }
  }

  mutation create_mutation {
    createMovie(title: "Mystic River", imdbId: "x28374t", year: 2003, mtype: MOVIE, poster: "https://placehold.it/300X500") {
      year
      mtype
      poster
    }
  }

  mutation update_mutation {
    updateMovie(_id: "5a95459537c2fc11e021ca5f", year: 2010, title: "True Grit") {
      year
      mtype
      poster
    }
  }

  mutation delete_mutation {
    deleteMovie(_id: "5a95459537c2fc11e021ca60")
  }
`;

module.exports = app => {
  app.use(
    "/graphql",
    graphqlExpress({
      formatError,
      schema,
      context: {
        Movie
      }
    })
  );
  app.use(
    "/graphiql",
    graphiqlExpress({ endpointURL: "/graphql", query: SAMPLE_QUERY })
  );
};
