<template>
  <div class="movies-rating-filters">
    {{ filters }}

    <UiSlider
      label="Metascore"
      name="metascore"
      v-model="filters.metascore" />

    <UiSlider
      label="Rating"
      name="rating"
      max="10"
      step="0.1"
      v-model="filters.rating"
    />
  </div>
</template>
<script>
import UiSlider from './UiSlider.vue'
export default {
  components: {
    UiSlider
  },
  props: {
    filters: {
      type: Object,
      required: false,
      default: () => {
        return {
          metascore: 0,
          rating: 0
        }
      }
    }
  },
  data () {
    return {
      metascore: 50,
      rating: 2
    }
  }
}
</script>
<style >
.movies-rating-filters {
  background-color: rgb(241, 195, 117);
}
</style>
