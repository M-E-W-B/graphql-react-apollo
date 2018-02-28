module.exports = {
  Query: {
    getMovies: async (root, arg, ctx) => await ctx.Movie.find({}),
    getMovieById: async (root, { _id }, ctx) => await ctx.Movie.findById(_id)
  },
  Mutation: {
    createMovie: async (root, { title, year, imdbId, mtype, poster }, ctx) => {
      const movie = new ctx.Movie({
        title,
        year,
        imdbId,
        mtype,
        poster
      });

      return await movie.save();
    },
    updateMovie: async (root, { _id, year, title }, ctx) => {
      const options = { new: true };
      return await ctx.Movie.findByIdAndUpdate(_id, { year, title }, options);
    },
    deleteMovie: async (root, { _id }, ctx) => {
      const result = await ctx.Movie.remove({ _id });
      return !!result.ok;
    }
  }
};
