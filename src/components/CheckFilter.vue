<template>
    <div :class="{'check-filter': true, 'active': checked}" v-on:click="checkFilter">
        <span class="checkbox"></span>
        <span class="check-filter-title" >{{ name }}</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      this.$emit("check-filter", this.catagory, this.name, this.checked);
    }
  },
  props: ["name", "catagory"]
};
</script>
