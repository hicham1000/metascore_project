<template>
  <div class="movie-grid">
    <img class="poster" :src="poster" />

    <div class="title">{{ title }}</div>

    <div class="year">{{ year }}</div>
    <!-- <img src="v-for="poster in poster" :key="poster""> -->
  </div>
</template>

<script>
export default {
  props: {
    poster: {
      type: String,
      required: false,
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    year: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
<style>
.movie-grid{
  /* margin-top: 1em; */
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  /* grid-template-rows: repeat(5, 1fr); */
  grid-column-gap: 5px;
  /* grid-row-gap: 0px; */
  background-color: rgb(108, 110, 115);
  margin:auto;
  justify-content: space-around

}
.poster {
  max-width: 230px;
  max-height: 350px;
}
</style>
