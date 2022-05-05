<template>
  <div class="movie-grid">
    <ul>
      <li v-for="movie in movies" :key="movie"></li>
      <div>{{ titles }}</div>
      <div>{{ year }}</div>
      <div>{{ poster }}</div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    year: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
