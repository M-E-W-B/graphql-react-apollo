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
`
];
