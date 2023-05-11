<template>
  <button
    :class="[
      rounded ? roundedVariants[rounded] : '',
      backgroundColorVariants[buttonColor],
      backgroundColorHoverVariants[buttonColor],
    ]"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { roundedVariants } from "../../constants/shapes";
import { backgroundColorVariants } from "../../constants/colors";
import { backgroundColorHoverVariants } from "../../constants/colors";

defineProps({
  label: {
    default: "Button",
    required: true,
    type: String,
  },
  buttonColor: {
    default: "primary",
    type: String,
  },
  rounded: {
    default: "",
    type: String,
    validator: (value: string) => {
      return ["full", "sm", "md"].includes(value);
    },
  },
});
</script>

<style scoped>
button {
  padding: 10px 15px;
}
</style>
