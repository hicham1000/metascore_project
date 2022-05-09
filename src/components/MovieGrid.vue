<template>
  <div class = "all" v-for="movie of movies" :key="movie.Title">
    <div>{{ movie.Title }}</div>
    <div>{{ movie.Year }}</div>
    <div><img :src="movie.Poster" alt="" /></div>
    <MovieSummary
      :year="movie.Year"
      :title="movie.Title"

     />
           <!-- :poster="movie.Poster" -->
  </div>
</template>

<script>
import MovieSummary from "./MovieSummary.vue";

export default {
  components: { MovieSummary },
  props: {
    movies: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
.all {
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px; 
  grid-row-gap: 0px;
  background-color:rgb(111, 163, 159);
}

</style>
