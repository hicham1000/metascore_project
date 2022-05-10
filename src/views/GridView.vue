<template>
  <div class="container">
    <!-- <router-link :to="{ name: movies, params: { id: 123 } }" /> -->

    <Sidebar class="sidebar" title="Genres">
      <!-- <template v-slot:body> -->

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
import Sidebar from "@/components/Sidebar.vue";
import MovieGenreList from "@/components/MovieGenreList.vue";
import MovieRatingFilters from "@/components/MoviesRatingFilters.vue";
import MovieGrid from "@/components/MovieGrid.vue";
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
.container {
  /* display: flex;  */
  /* background-color: rgb(233, 33, 33);  */
}
</style>
