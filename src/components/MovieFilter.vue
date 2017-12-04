<template>
    <div id="movie-filter">
        <h2>Filter Results</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" :name="genre" v-on:check-filter="checkFilter"></check-filter>
        </div>
    </div>
</template>

<script>
import genres from "../util/genres";
import CheckFilter from "./CheckFilter.vue";
export default {
  data() {
    return {
      genres
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
