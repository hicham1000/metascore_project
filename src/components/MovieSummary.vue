<template>
  <div class="movie-grid">
    <ul>
      <li class="poster">{{ poster }}></li>
      <li class="title">{{ title }}</li>
      <li class="year">{{ year }}</li>
      <!-- <img src="v-for="poster in poster" :key="poster""> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    poster: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    year: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
