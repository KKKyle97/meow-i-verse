<template>
  <DefaultLayout>
    <div class="chatlist-page">
      <div class="container">
        <div class="chatlist">
          <AccountSelection />
          <div class="chatlist__labels">
            <div class="lb">Messages</div>
            <div class="req">2 Requests</div>
          </div>
          <div class="chatlist__actual">
            <ChatListItemSkeleton />
            <ChatListItemSkeleton />
            <ChatListItemSkeleton />
          </div>
        </div>
        <EmptyChatContent />
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/layouts/Default.vue";
import AccountSelection from "@/components/chat-page/AccountSelection.vue";
import ChatListItemSkeleton from "@/components/chat-page/ChatListItemSkeleton.vue";
import EmptyChatContent from "@/components/chat-page/EmptyChatContent.vue";

export default defineComponent({
  components: {
    DefaultLayout,
    AccountSelection,
    ChatListItemSkeleton,
    EmptyChatContent,
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
      &__labels
        display: flex
        padding: 0 20px
        margin: 12px 0 4px
        justify-content: space-between
        align-items: center
        .lb
          font-weight: 600
          font-size: 16px
          line-height: 24px
        .req
          font-size: 14px
          font-weight: 600
          color: rgb(0, 149, 246)
          line-height: 18px
</style>
