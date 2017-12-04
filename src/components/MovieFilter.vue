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
    "check-filter": {
      data() {
        return {
          checked: false
        };
      },
      methods: {
        checkFilter() {
          this.checked = !this.checked;
          this.$emit("check-filter", "genre", this.name, this.checked);
        }
      },
      template: `<div :class="{'check-filter': true, 'active': checked}" v-on:click="checkFilter">
                    <span class="checkbox"></span>
                    <span class="check-filter-title" >{{ name }}</span></div>`,
      props: ["name"]
    }
  }
};
</script>
