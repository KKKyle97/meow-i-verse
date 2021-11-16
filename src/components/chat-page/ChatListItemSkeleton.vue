<template>
  <div class="chatlist-item-skeleton">
    <div class="left"></div>
    <div class="right">
      <div class="right__top"></div>
      <div class="right__btm"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.chatlist-item-skeleton
  padding: 8px 16px
  display: flex
  .left
    width: 56px
    height: 56px
    border-radius: 9999px
    background: rgb(239,239,239)
  .right
    flex: 1 1 auto
    height: 56px
    padding: 8px 0
    margin-left: 12px
    display: flex
    flex-direction: column
    justify-content: space-between
    &__top
      height: 14px
      width: 116px
      background: rgb(239,239,239)
      border-radius: 4px
      flex: 0 0 auto
    &__btm
      height: 14px
      width: 84px
      background: rgb(239,239,239)
      border-radius: 4px
      flex: 0 0 auto
</style>
