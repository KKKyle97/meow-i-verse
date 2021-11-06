<template>
  <DefaultLayout>
    <div class="about">
      <h1>This is an chatlist page</h1>
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
