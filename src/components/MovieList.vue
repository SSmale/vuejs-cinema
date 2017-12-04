<template>
    <div id="movie-list">
        <movie-item class="movie" v-for="movie in filteredMovies" :movie="movie"></movie-item>
    </div>
</template>

<script>
import genresList from "../util/genres";
import MovieItem from "./MovieItem.vue";
export default {
  props: ["genre", "time", "movies"],
  methods: {
    moviePassesGenreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else {
        return this.genre.find(genre => movie.movie.Genre === genre);
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    }
  },
  components: {
    MovieItem
  }
};
</script>
