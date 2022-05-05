<template>
  <ul>
    <li v-for="movie in movies" :key="movie.title"></li>
    <div>{{ titles }}</div>
    <div>{{ year }}</div>
    <div>{{ poster }}</div>
  </ul>
</template>

<script>
import MovieSummary from './MovieSummary.vue'

export default {
  components: { MovieSummary },
  props: {
    movies: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
