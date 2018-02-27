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
`
];

const rootResolvers = {
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime
};

const typeDefs = [...RootSchema, ...MovieSchema];

const resolvers = {
  ...rootResolvers,
  ...movieResolvers
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
