<template>
  <DefaultLayout>
    <div class="chatlist-page">
      <div class="chatlist-container"></div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/layouts/Default.vue";

export default defineComponent({
  components: {
    DefaultLayout,
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_colors"

.chatlist-page
  padding: 20px
  height: calc(100vh - 54px)

  .chatlist-container
    max-width: 935px
    margin: 0 auto
    width: 100%
    height: 100%
    background: $white
    border: 1px solid $gray-200
    overflow: auto
    border-radius: 5px
</style>
