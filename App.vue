<template>
  <Sidebar title="Genres">
    <MovieGenreList slot="body" :genres="allMoviesGenres" />
    <!-- properité filters -->
    <MoviesRatingFilters slot="body" :filters="filters" />
    <MovieGrid slot="body" :movies="movies" />
  </Sidebar>
</template>

<script>
import Sidebar from "./components/Sidebar.vue"
import MovieGenreList from "./components/MovieGenreList.vue"
import MoviesRatingFilters from "./components/MoviesRatingFilters.vue"
import MovieGrid from "./components/MovieGrid.vue"

export default {
  components: {
    Sidebar,
    MovieGenreList,
    MoviesRatingFilters,
    MovieGrid,
  },
  data() {
    return {
      // secondMovieName: "X-Men",
      list: 1,
      movies: [],
      filters: {
        metascore: 80,
        rating: 7.5,
      },
    };
  },

  beforeMount() {
    // console.log(this);
    this.fetchAllMovies();
  },

  //ici
  computed: {
    allMoviesGenres() {
      const genres = this.movies
        .filter((movie) => movie && movie.Genre)
        .flatMap((movie) => movie.Genre.split(","))
        .map((genre) => genre.trim());
      // console.log(genres);

      return Array.from(new Set(genres));
    },
  },
  methods: {
    fetchAllMovies() {
      return fetch(
        `https://api.themoviedb.org/3/list/${this.list}?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US`
      )
        .then((response) => response.json())
        .then((response) => response.items)
        .then((movies) => movies.map((m) => m.title))
        .then((titles) =>
          titles.map((title) => {
            return fetch(
              `https://www.omdbapi.com/?t=${title}&apikey=14183770`
            ).then((response) => response.json());
          })
        )
        .then((promises) => Promise.all(promises))
        .then((movies) => (this.movies = movies));
    },
  },
};
</script>
<style src="normalize.css/normalize.css"></style>
  