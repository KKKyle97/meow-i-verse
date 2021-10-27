<template>
  <div class="landing">
    <BackgroundSlideshow />

    <form autocomplete="off" @submit="login">
      <div class="logo">
        <span>mewoiverse</span>
      </div>
      <div class="input-section">
        <label for="username">Username</label>
        <input type="text" name="username" autocomplete="off" />
      </div>
      <div class="input-section">
        <label for="password">Password</label>
        <input type="password" name="password" autocomplete="new-password" />
      </div>

      <button type="submit">Login</button>

      <div class="register-link">
        <span>Don't have an account yet? Join now</span>
      </div>

      <div class="forgot-pw-link">
        <span>Forgot password?</span>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackgroundSlideshow from "@/components/landing-page/BackgroundSlideshow.vue";

export default defineComponent({
  components: {
    BackgroundSlideshow,
  },
  setup() {
    function login(event: Event) {
      event.preventDefault();
      // login logics
    }

    return { login };
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_colors"
@import "../assets/sass/_breakpoints"
@import "../assets/sass/_fonts"

.landing
  position: relative
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  form
    border-radius: 5px
    width: calc($xs - 20px)
    .logo
      font-family: $ubuntu
      font-size: 2em
      font-weight: 700
      color: white
      text-align: center
    .input-section
      margin: 22px 0 12px
      label
        color: $gray-50
      input
        margin-top: 10px
        line-height: 20px
    button
      font-size: 1em
      color: $gray-50
      transition: background .2s ease-in-out
      &:hover
        background: $white
        color: $gray-700
    .register-link,
    .forgot-pw-link
      margin: 6px 0
      text-align: center
      color: $white
      cursor: pointer
      font-size: .8em
      &:hover
        text-decoration: underline
    .register-link
      margin-top: 24px
@media screen and (min-width: $sm)
  .landing
    form
      width: $xs
</style>
