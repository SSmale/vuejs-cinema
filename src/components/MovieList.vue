<template>
    <div id="movie-list">
        <div class="movie" v-for="movie in movies">{{ movie.title }}</div>
    </div>
</template>

<script>
import genres from "../util/genres";
export default {
  data() {
    return {
      movies: [
        {
          title: "pulp fiction",
          genre: genres.CRIME
        },
        {
          title: "Home Alone",
          genre: genres.COMEDY
        },
        {
          title: "Austin Powers",
          genre: genres.COMEDY
        }
      ]
    };
  }
};
</script>
