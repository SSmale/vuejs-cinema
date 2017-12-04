<template>
    <div id="movie-list">
        <div class="movie" v-for="movie in filteredMovies">{{ movie.title }}</div>
    </div>
</template>

<script>
import genresList from "../util/genres";
export default {
  data() {
    return {
      movies: [
        {
          title: "pulp fiction",
          genre: genresList.CRIME
        },
        {
          title: "Home Alone",
          genre: genresList.COMEDY
        },
        {
          title: "Austin Powers",
          genre: genresList.COMEDY
        }
      ]
    };
  },
  props: ["genre", "time"],
  methods: {
    moviePassesGenreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else {
        return this.genre.find(genre => movie.genre === genre);
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    }
  }
};
</script>
