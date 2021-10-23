<template>
  <div class="about">
    <nav id="nav">
      <router-link :to="{ name: 'landing' }">Landing Page</router-link> |
      <router-link :to="{ name: 'register' }">Register Page</router-link> |
      <router-link :to="{ name: 'home' }">Home Page</router-link> |
      <router-link :to="{ name: 'searchresult' }">Search Page</router-link> |
      <router-link :to="{ name: 'chatlist' }">Chat Page</router-link> |
      <router-link :to="{ name: 'settings' }">Settings Page</router-link> |
      <router-link :to="{ name: 'profile' }">Profile Page</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
