<template>
  <div class="container">
    <Sidebar class="sidebar" title="Genres">
      
      <MovieGenreList slot="body" :genre="allMoviesGenres" />
      <!-- properité filters -->
      <MoviesRatingFilters slot="body" />

      {{ filters.metascore }}
      {{ filters.rating }}
      {{ genres }}
    </Sidebar>
    <MovieGrid class="grid" :movies="movies" />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import MovieGenreList from "./components/MovieGenreList.vue";
import MovieRatingFilters from "./components/MoviesRatingFilters.vue";
import MovieGrid from "./components/MovieGrid.vue";
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

export default {
  components: {
    Sidebar,
    MovieGenreList,
    MovieRatingFilters,
    MovieGrid
  },
  beforeMount() {
    this.setListNumber(2);
    this.getAllMovies();
  },
  computed: {
    ...mapState(["movies", "filters"]),
    ...mapGetters(["allMoviesGenres"])
  },
  methods: {
    ...mapMutations(["setListNumber"]),
    ...mapActions(["getAllMovies"])
  }
};
</script>
<style src="normalize.css/normalize.css">
.container{
  display: flex;
  background-color: blueviolet;
}
</style>
