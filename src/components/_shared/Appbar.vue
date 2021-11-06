<template>
  <div class="appbar">
    <header class="appbar__header">
      <div class="appbar__header__logo">
        <Logo />
      </div>
      <div class="appbar__header__searchbar">
        <input
          type="search"
          aria-label="Search Input"
          placeholder="Search"
          ref="searchInput"
          @blur="blurSearch"
          v-model="searchTerm"
        />

        <div class="layover" @click="focusSearch" v-if="!searchFocus">
          <span>Search</span>
        </div>
        <div class="clear-btn" v-else @click="clearSearch"></div>
      </div>
      <div class="appbar__header__app">
        <a href="/">
          <svg
            aria-label="Home"
            color="#262626"
            fill="#262626"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"
            ></path>
          </svg>
        </a>
        <a href="/">
          <svg
            aria-label="Messenger"
            color="#262626"
            fill="#262626"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z"
            ></path>
          </svg>
        </a>
        <a href="/">
          <svg
            aria-label="New Post"
            color="#262626"
            fill="#262626"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"
            ></path>
            <path
              d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"
            ></path>
            <path
              d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"
            ></path>
          </svg>
        </a>
        <a href="/">
          <svg
            aria-label="Find People"
            color="#262626"
            fill="#262626"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              clip-rule="evenodd"
              d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="/">
          <svg
            aria-label="Activity Feed"
            color="#262626"
            fill="#262626"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
            ></path>
          </svg>
        </a>
        <div class="profile">
          <img
            :src="require('@/assets/imgs/userdefault.jpg')"
            alt="default avatar"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/_shared/Logo.vue";

export default defineComponent({
  components: {
    Logo,
  },
  data: () => ({
    searchFocus: false,
    searchTerm: "",
  }),
  methods: {
    focusSearch(): void {
      this.searchFocus = true;
      (this.$refs.searchInput as HTMLInputElement).focus();
    },
    blurSearch(): void {
      this.searchFocus = false;
      this.clearSearch();
    },
    clearSearch(): void {
      this.searchTerm = "";
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_colors"

.appbar
  height: 54px
  position: fixed
  top: 0
  width: 100%
  align-items: center
  display: flex
  justify-content: center
  border-bottom: 1px solid $gray-200
  &__header
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 25px
    max-width: 975px
    width: 100%
    &__logo
      flex: 1 9999 0%
    &__searchbar
      height: 28px
      flex: 0 1 auto
      min-width: 125px
      width: 215px
      background: $bg-gray
      position: relative
      input
        z-index: 2
        padding: 3px 10px 3px 26px
        border-radius: 3px
        border: 1px solid $gray-200
        outline: 0
        height: 100%
        background: $bg-gray
      .clear-btn
        height: 20px
        width: 20px
        position: absolute
        top: 4px
        right: 5px
        background-image: url("../../assets/maps/texturemap.png")
        background-position: -318px -333px
      .layover
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 100%
        font-size: 14px
        background: $bg-gray
        padding: 3px 7px
        font-weight: 300
        text-align: center
        border-radius: 3px
        border: 1px solid $gray-200
        cursor: text
        color: $gray-500
    &__app
      display: flex
      flex: 1 0 0%
      justify-content: flex-end
      gap: 22px
      align-items: center
      a
        display: block
        height: 22px
        position: relative
        &::after
          content: ''
          position: absolute
          bottom: -10px
          width: 4px
          height: 4px
          background-color: $red-400
          border-radius: 2px
          left: 50%
          transform: translateX(-50%)
      .profile
        height: 22px
        width: 22px
        position: relative
        img
          width: 100%
          height: 100%
          &::after
            content: ''
            position: absolute
            top: 0
            bottom: 0
            left: 0
            right: 0
            border-radius: 999px
            border: 1px solid rgba(0, 0, 0, 0.0975)
</style>
