<template>
  <ul>
    <li v-for="genre in genres" :key="genre">
      {{ genre }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: true
    }
  }
}
</script>
