module.exports = [
  `
  enum MovieType {
    MOVIE
    TVSERIES
  }

  type Movie {
    _id: String!,
    title: String!,
    year: Int,
    imdbId: String!,
    mtype: MovieType,
    poster: String,
    createdAt: DateTime!
  }

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
