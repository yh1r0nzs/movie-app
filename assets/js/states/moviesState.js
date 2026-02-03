export function splitFeaturedMovie(movies) {
  const index = Math.floor(Math.random() * movies.length);

  return {
    featured: movies[index],
    list: movies.filter((_, i) => i !== index),
  };
}
