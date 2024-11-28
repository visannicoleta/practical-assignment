import { createRouter, createWebHistory } from "vue-router";
import store from "../store/store";
import LoginPage from "../components/LoginPage.vue";
import ContactPage from "../components/ContactPage.vue";
import HomePage from "../components/HomePage.vue";
import MyAccountPage from "../components/MyAccountPage.vue";

const routes = [
  { path: '/', component: LoginPage },
  {
    path: '/home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) {
        console.log(store.getters.isAuthenticated);
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: '/contact',
    component: ContactPage,
    beforeEnter: (to, from, next) => {
      console.log(store.getters.isAuthenticated);
      if (!store.getters.isAuthenticated) {
        next("/");
      } else {
        next();
      }
    },
  },
  { path: '/myaccount', component: MyAccountPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
