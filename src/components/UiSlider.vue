<template>
  <div class="movies-rating-filters">
    <label v-if="label.length" :for="name">{{ label }}</label>
    <input
      type="range"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      @input="onInputChange"
    />
  </div>
</template>

<script>
export default {
  emits: ['input'],
  props: {
    value: {
      type: Number,
      required: false,
      default: 50
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    min: {
      type: [Number, String],
      required: false,
      default: 0
    },
    max: {
      type: [Number, String],
      required: false,
      default: 100
    },
    step: {
      type: [Number, String],
      required: false,
      default: 1
    }
  },
  methods: {
    onInputChange (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
