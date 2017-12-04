<template>
  <div class="movie">
      <div class="movie-col-left">
          <img :src="movie.Poster" alt="">
      </div>
      <div class="movie-col-right">
          <div class="movie-title">
              <h2>{{ movie.Title }}</h2>
              <span class="movie-rating">{{ movie.Rated }}</span>
          </div>
          <div class="movie-sessions">
              <div class="session-time-wrapper" v-for="session in sessions" :key="session.id">
                  <div class="session-time">
                    {{ formattSessionTime(session.time) }}
                  </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["movie", "sessions"],
  methods: {
    formattSessionTime(raw) {
      return this.$moment(raw).format("h:mm A");
    }
  }
};
</script>
