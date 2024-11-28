<template>
  <custom-header>
  </custom-header>
    <div class="sidebar-layout">
      <aside>
        <nav>
          <router-link to="/home" active-class="selected">
            <font-awesome-icon icon="home" />
            <span>Home</span>
          </router-link>
          <router-link to="/contact" active-class="selected">
            <font-awesome-icon icon="envelope" />
            <span>Contact</span>
          </router-link>
          <router-link to="/" active-class="selected">
            <font-awesome-icon icon="sign-in-alt" />
            <span>Login</span>
          </router-link>
        </nav>
      </aside>
      <main>
        <slot></slot>
      </main>
    </div>
</template>

<script>
import '../lion-elements/CustomHeader';

export default {
  name: "MainNavigation",
};
</script>

<style scoped>

.sidebar-layout {
  display: flex;
  min-height: 100vh;
}

aside {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
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

main {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

/* Responsive styles */
@media (max-width: 768px) {
  .sidebar-layout {
    flex-direction: column;
  }

  aside {
    width: 100%;
    box-shadow: none;
    padding: 10px;
  }

  nav {
    flex-direction: row;
    justify-content: space-around;
  }

  nav a {
    margin-bottom: 0;
  }

  main {
    padding: 10px;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>