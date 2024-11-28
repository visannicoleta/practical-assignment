<template>
  <div id="app">
    <main-navigation></main-navigation>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    MainNavigation,
    AppFooter
  },
};
</script>