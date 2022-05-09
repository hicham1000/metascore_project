<template>
  <div class="movies-rating-filters">
    {{ filters }}

    <UiSlider 
    label="Metascore" 
    name="metascore" 
    min="0"
    max="100"
    v-model.number="metascore" />

    <UiSlider
      label="Rating"
      name="rating"
      max="10"
      step="0.1"
      v-model.number="rating"
    />
  </div>
</template>
<script>
import UiSlider from "./UiSlider.vue";
import store from "@/store";

function setFilterValue(keyname = "", value = "") {
  store.commit("setFilterValue", { keyname, value });
}

export default {
  components: {
    UiSlider
  },
  computed: {
    metascore: {
      get: () => store.state.filters.metascore,
      set: (v) => setFilterValue("metascore", v)
    },
    rating: {
      get: () => store.state.filters.rating,
      set: (v) => setFilterValue("rating", v)
    }
  }
};
</script>
<style></style>
