<template>
  <div class="movies-rating-filters">
    <div>{{ name }} {{ modelValue }}</div>
    <label v-if="label.length" :for="name">{{ label }}</label>
    <input
      type="range"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="onInputChange"
    />
    <!-- :modelValue="modelValue"
      @update:modelValue="setFilterValue" -->
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: 50
    },
    label: {
      type: String,
      required: false,
      default: ""
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
    onInputChange(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>
