const { merge } = require("lodash");
const { makeExecutableSchema } = require("graphql-tools");
const {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} = require("graphql-iso-date");

const { schema: MovieSchema, resolvers: movieResolvers } = require("./movie");

const RootSchema = [
  `
  # An RFC 3339 compliant date-time scalar
  scalar DateTime

  # An RFC 3339 compliant date scalar
  scalar Date

  # An RFC 3339 compliant time scalar
  scalar Time

  type Query {
    getMovies: [Movie]
    getMovieById(_id: String!): Movie
  }

  type Mutation {
    createMovie(title: String!, year: Int, imdbId: String!, mtype: MovieType, poster: String) : Movie
    updateMovie(_id: String, year: Int, title: String): Movie
    deleteMovie(_id: String): Boolean
  }
`
];

const rootResolvers = {
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime
};

const typeDefs = [...RootSchema, ...MovieSchema];

const resolvers = merge(rootResolvers, movieResolvers);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
