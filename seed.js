const { MongooseConnect } = require("./lib/utils");
const Movie = require("./lib/graphql/movie/model");

const movies = [
  {
    title: "Into the Wild",
    year: 2007,
    imdbId: "tt0758758",
    mtype: "MOVIE",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_SX300.jpg"
  },
  {
    title: "Wild Wild West",
    year: 1999,
    imdbId: "tt0120891",
    mtype: "MOVIE",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmYyMTc4YjItMGNhNC00OWQwLWJhMWUtNTdjZDgxMDI5MjE2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    title: "Wild",
    year: 2014,
    imdbId: "tt2305051",
    mtype: "TVSERIES",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNzI2MDc1Ml5BMl5BanBnXkFtZTgwOTU5NTYxMjE@._V1_SX300.jpg"
  }
];

MongooseConnect.open().then(async function() {
  await Movie.remove({});
  await Movie.insertMany(movies);
  console.log("Movie added! 🐸");

  // MongooseConnect.close();
});
