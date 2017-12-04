<template>
    <div id="movie-filter">
        <h2>Filter Results</h2>
        <h3>By time of day</h3>
        <div class="filter-group">
            <check-filter v-for="time in times" :name="time" v-on:check-filter="checkFilter" catagory="time"></check-filter>
        </div>
        <h3>By genre</h3>
        <div class="filter-group">
            <check-filter v-for="genre in genres" :name="genre" v-on:check-filter="checkFilter" catagory="genre"></check-filter>
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
  methods: {
    checkFilter(catagory, name, state) {
      this.$emit("check-filter", catagory, name, state);
    }
  },
  components: {
    CheckFilter
  }
};
</script>
