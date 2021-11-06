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
.default
  &__content
    padding-top: 54px
</style>
