<template>
    <div id="movie-filter">
        <h2>Filter Results</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" :name="genre"></check-filter>
        </div>
    </div>
</template>

<script>
import genres from "../util/genres";
export default {
  data() {
    return {
      genres
    };
  },
  components: {
    "check-filter": {
      data() {
        return {
          checked: false
        };
      },
      methods: {},
      template: `<div :class="{'check-filter': true, 'active': checked}" v-on:click="checked = !checked">
                    <span class="checkbox"></span>
                    <span class="check-filter-title" >{{ name }}</span></div>`,
      props: ["name"]
    }
  }
};
</script>
