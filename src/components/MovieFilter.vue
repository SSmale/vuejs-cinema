<template>
    <div id="movie-filter">
        <h2>Filter Results</h2>
        <h3>By time of day</h3>
        <div class="filter-group">
            <check-filter v-for="(time, index) in times" :name="time" catagory="time" :key="index"></check-filter>
        </div>
        <h3>By genre</h3>
        <div class="filter-group">
            <check-filter v-for="(genre, index) in genres" :name="genre" catagory="genre" :key="index"></check-filter>
        </div>
    </div>
</template>

<script>
import genres from "../util/genres";
import times from "../util/times";

import CheckFilter from "./CheckFilter.vue";
export default {
  data() {
    return {
      genres,
      times
    };
  },
  components: {
    CheckFilter
  }
};
</script>
