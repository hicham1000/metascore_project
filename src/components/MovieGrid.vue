<template>
  <div class="all" v-for="movie of movies" :key="movie.Title">
   
    <MovieSummary :year="movie.Year" :title="movie.Title" :movie="movie.Year" :poster="movie.Poster"/>
     <!-- <div>{{ movie.Title }}</div>
    <div>{{ movie.Year }}</div>
    <div><img :src="movie.Poster" alt="" /></div> -->
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

</style>
