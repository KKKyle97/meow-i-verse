<template>
  <DefaultLayout>
    <div class="chatlist-page">
      <div class="container">
        <div class="chatlist">
          <AccountSelection />
        </div>
        <div class="chat-content">
          hello
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/layouts/Default.vue";
import AccountSelection from "@/components/chat-page/AccountSelection.vue";

export default defineComponent({
  components: {
    DefaultLayout,
    AccountSelection,
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_colors"

.chatlist-page
  padding: 20px
  height: calc(100vh - 54px)

  .container
    max-width: 935px
    margin: 0 auto
    width: 100%
    height: 100%
    background: $white
    border: 1px solid $gray-200
    overflow: auto
    border-radius: 5px
    display: flex
    .chatlist
      width: 350px
      border-right: 1px solid $gray-200
</style>
