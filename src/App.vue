<template>
  <div id="app">
    <div class="min-h-screen h-full bg-gray-100 flex flex-col">
      <nav-bar />
      <router-view class="view "></router-view>
      <div class="flex-1" />
      <footer-component />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  },
  created() {
      this.$store.commit('refreshTodos');
  },
}
</script>
