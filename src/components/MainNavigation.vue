<template>
  <div>
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <router-link
              to="/home"
              :class="{ selected: selectedLink === 'home' }"
              @click="selectLink('home')"
            >
              <font-awesome-icon icon="home" />
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              :class="{ selected: selectedLink === 'contact' }"
              @click="selectLink('contact')"
            >
              <font-awesome-icon icon="envelope" />
              <span>Contact</span>
            </router-link>
          </li>
          <li>
            <router-link
              v-if="isAuthenticated"
              to="/myaccount"
              :class="{ selected: selectedLink === 'myaccount' }"
              @click="selectLink('myaccount')"
            >
              <font-awesome-icon icon="sign-in-alt" /> <span>My Account</span>
            </router-link>
            <router-link
              v-else
              to="/"
              :class="{ selected: selectedLink === '' }"
              @click="selectLink('')"
            >
              <font-awesome-icon icon="sign-in-alt" /> <span>Login</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MainNavigation",
  computed: {
    ...mapState(["selectedLink", "user"]),
    isAuthenticated() { if (this.user && this.user.isAuthenticated) console.log('this.user.isAuthenticated',this.user); return this.user && this.user.isAuthenticated; }
  },
  methods: {
    ...mapActions(["updateSelectedLink", "loginUser", "logoutUser"]),
    selectLink(link) {
      this.updateSelectedLink(link);
    },
  },
  watch: { 
    user(newVal, oldVal) { 
      console.log('user',this.user);
      console.log(this.user.isAuthenticated);
      console.log('User state changed:', newVal, oldVal); 
    } 
  }
};
</script>

<style scoped>
:host {
  display: block;
  background-color: #f0f0f0;
  color: #333;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.logo img {
  width: auto;
}
nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav {
  display: flex;
  flex-direction: column;
}
nav a {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
nav a:hover {
  background-color: #e2e6ea;
}
nav a.selected {
  background-color: #007bff;
  color: #fff;
}
nav a font-awesome-icon {
  margin-right: 8px;
}
nav a span {
  margin-left: 8px;
}
@media (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }
  nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }
  nav {
    flex-direction: row;
    justify-content: space-around;
  }
  nav a {
    margin-bottom: 0;
  }
}
</style>
