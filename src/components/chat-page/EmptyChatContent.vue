<template>
  <div class="empty-chat-content">
    <div class="icon"></div>
    <div class="label-1">Your Messages</div>
    <div class="label-2">
      Send private photos and messages to a friend or group.
    </div>
    <div class="button">Send Message</div>
  </div>
</template>

<style lang="sass" scoped>
@import "../../assets/sass/_colors"

.empty-chat-content
  flex: 1 1 auto
  display: flex
  padding: 24px
  justify-content: center
  align-items: center
  flex-direction: column
  .icon
    background-image: url("../../assets/maps/texturemap-set2.png")
    background-repeat: no-repeat
    background-position: -196px -205px
    height: 96px
    width: 96px
  .label-1
    margin-top: 16px
    text-align: center
    font-weight: 300
    font-size: 22px
    line-height: 26px
    // margin: -4px 0 -5px
  .label-2
    margin-top: 16px
    text-align: center
    font-size: 14px
    line-height: 18px
    color: rgb(142,142,142)
    // margin: -3px 0 -4px
  .button
    margin-top: 24px
    padding: 4px
    border: 1px solid transparent
    background-color: rgb(0, 149, 246)
    border-radius: 4px
    font-weight: 600
    padding: 5px 9px
    cursor: pointer
    font-size: 14px
    line-height: 18px
    color: white
</style>
