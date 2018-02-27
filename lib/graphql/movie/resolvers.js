const Movie = require("./model");

module.exports = {
  Query: {
    getMovies: async () => await Movie.find({}),
    getMovieById: async (obj, { _id }) => await Movie.findById(_id)
  },
  Mutation: {
    createMovie: async (obj, { title, year, imdbId, mtype, poster }) => {
      const movie = new Movie({
        title,
        year,
        imdbId,
        mtype,
        poster
      });

      return await movie.save();
    },
    updateMovie: async (obj, { _id, year, title }) => {
      const options = { new: true };
      return await Movie.findByIdAndUpdate(_id, { year, title }, options);
    },
    deleteMovie: async (obj, { _id }) => {
      const result = await Movie.remove({ _id });
      return !!result.ok;
    }
  }
};
