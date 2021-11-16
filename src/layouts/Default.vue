<template>
  <div class="default">
    <Appbar />
    <main class="default__content">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appbar from "@/components/_shared/Appbar.vue";

export default defineComponent({
  components: {
    Appbar,
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_colors"

.default
  min-height: 100vh
  background-color: $bg-gray
  &__content
    padding-top: 54px
</style>
