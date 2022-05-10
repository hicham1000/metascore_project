import { createStore } from 'vuex'

const store = createStore({
  state: {
    list: 1,
    movies: [],
    filters: {
      metascore: 80,
      rating: 7.5
    },
    lastErrorMessage: ''
  },
  getters: {
    getFilteredMovies(state) {
      return state.movies.filter(movie => movie && !isNaN(Number(movie.Metascore)))
    },
    allMoviesGenres(state) {
      const genres = state.movies
        .filter(movie => movie && movie.Genre)
        .flatMap((movie) => movie.Genre)
      return Array.from(new Set(genres))
    }
  },
  mutations: {
    setListNumber(state, list) {
      state.list = list
      // const list = state.list
      // state.filters[keyname] = value 
    },
    ON_MOVIES_FETCHED(state, movies) {
      state.movies = movies
    },
    ON_MOVIES_FETCH_ERROR(state, error) {
      state.lastErrorMessage = error.message
    },
    setFilterValue(state, payload) {
      const {
        keyname,
        value
      } = payload;
      state.filters[keyname] = value;
    },
  },
  actions: {
    getAllMovies(store) {
      const headers = new Headers({})
      headers.set('Authorization', 'Xu5dFkttF9yc49tCM2WYNJ2VYrUceBaL6mSWR9GTmtAfdGtqJS22KPzmKeHdcrdW');

      fetch('http://localhost:8080/movies', { headers })
        .then(response => response.json())
        .then(movies => store.commit('ON_MOVIES_FETCHED', movies))
        .catch(e => store.commit('ON_MOVIES_FETCH_ERROR', e))
    }
  }
})

export default store
