<template>
  <div class="myaccount">
    <h1>Welcome, {{ user.username }}</h1>
    <p>This is your account page.</p>
    <div class="user-info">
      <div class="info-item">
        <span class="label">Username:</span>
        <span class="value">{{ user.username }}</span>
      </div>
      <div class="info-item">
        <span class="label">Email:</span>
        <span class="value">{{ user.email }}</span>
      </div>
      <div class="info-item">
        <span class="label">Full Name:</span>
        <span class="value">{{ user.fullName }}</span>
      </div>
      <div class="info-item">
        <span class="label">Phone Number:</span>
        <span class="value">{{ user.phoneNumber }}</span>
      </div>
    </div>
    <simple-button @click="logout">Logout</simple-button>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import '../lion-elements/SimpleButton';

export default {
  name: "MyAccountPage",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["logoutUser", "updateSelectedLink"]),
    logout() {
      this.logoutUser();
      this.$router.push("/");
      this.updateSelectedLink("");
    },
  },
  mounted() {
    this.updateSelectedLink("myaccount"); // Set selected link to "My account"
  },
};
</script>

<style scoped>
.myaccount {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.user-info {
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
}

.label {
  font-weight: bold;
  color: #555;
}

.value {
  color: #007bff;
}

simple-button {
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

simple-button:hover {
  background: #0056b3;
}
</style>
