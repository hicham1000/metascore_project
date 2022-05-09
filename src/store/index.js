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
    getFilteredMovies (state) {
      return state.movies.filter(movie => movie && !isNaN(Number(movie.Metascore)))
    },
    allMoviesGenres (state) {
      const genres = state.movies
        .filter(movie => movie && movie.Genre)
        .flatMap((movie) => movie.Genre.split(','))
        .map(genre => genre.trim())
      return Array.from(new Set(genres))
    }
  },
  mutations: {
    setListNumber (state, list) {
      state.list = list
      // const list = state.list
      // state.filters[keyname] = value 
    },
    ON_MOVIES_FETCHED (state, movies) {
      state.movies = movies
    },
    ON_MOVIES_FETCH_ERROR (state, error) {
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
    getAllMovies (store) {
      const { list } = store.state
      return fetch(`https://api.themoviedb.org/3/list/${list}?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US`)
        .then(response => response.json())
        .then(response => response.items)
        .then(movies => movies.map(m => m.title))
        .then(titles => titles.map(title => {
          return fetch(`https://www.omdbapi.com/?t=${title}&apikey=14183770`)
            .then(response => response.json())
        }))
        .then(promises => Promise.all(promises))
        .then(movies => store.commit('ON_MOVIES_FETCHED', movies))
        .catch(e => store.commit('ON_MOVIES_FETCH_ERROR', e))
    }
  }
})

export default store
