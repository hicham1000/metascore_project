<template>
  <div class="sidebar">
    <h3 v-if="title">{{ title }}</h3>
    <h3 v-else>Navigation</h3>
    <div class="default-slot"><slot /></div>
    <slot name="heading" />
    <slot name="body" />
    <slot name="foot" />
  </div>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: false,
      default: () => []
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}

</script>
