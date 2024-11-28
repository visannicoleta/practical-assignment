<template>
  <div class="home-page">
    <h2>Welcome to ING Bank {{ user.username }}</h2>
    <p>{{ ingContent }}</p>
    <!-- Adding a Section for Products and Services -->
    <section class="products-services">
      <h3>Our Products and Services</h3>
      <div class="service">
        <img src="../assets/savings.jpg" alt="Savings" />
        <div class="service-text">
          <h4>Savings Accounts</h4>
          <p>
            Save money with competitive interest rates and secure deposits.
            <a href="#savings">Learn more</a>.
          </p>
        </div>
      </div>
      <div class="service">
        <img src="../assets/loans.jpg" alt="Loans" />
        <div class="service-text">
          <h4>Personal Loans</h4>
          <p>
            Get the financial help you need with flexible loan options.
            <a href="#loans">Find out more</a>.
          </p>
        </div>
      </div>
      <div class="service">
        <img src="../assets/mortgages.jpg" alt="Mortgages" />
        <div class="service-text">
          <h4>Mortgages</h4>
          <p>
            We offer various mortgage solutions to help you buy your dream home.
            <a href="#mortgages">Explore mortgages</a>.
          </p>
        </div>
      </div>
    </section>
    <!-- Adding a Section for News and Updates -->
    <section class="news-updates">
      <h3>Latest News and Updates</h3>
      <article>
        <h4>ING Bank Launches New Mobile App</h4>
        <p>
          Our new mobile app is now available, offering a seamless banking
          experience on the go. <a href="#mobile-app">Read more</a>.
        </p>
      </article>
      <article>
        <h4>Sustainability Initiatives</h4>
        <p>
          Learn about our commitment to sustainability and how we're making a
          positive impact.
          <a href="#sustainability">Discover our initiatives</a>.
        </p>
      </article>
    </section>
  </div>
</template> <script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return { ingContent: this.getIngContent() };
  },
  computed: { ...mapGetters(["user"]) },
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
      this.$router.push("/login");
    },
    getIngContent() {
      return ` ING is a leading European bank with over 60,000 employees serving more than 38 million customers in over 40 countries. Our purpose is to empower people to stay a step ahead in life and in business. We offer a wide range of products including savings, payments, investments, loans, and mortgages. Our commitment to sustainability and innovation drives us to provide exemplary service and support a better world. `;
    },
  },
};
</script> <style scoped>
.home-page {
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  text-align: center;
}
h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  color: #555;
}
.products-services,
.news-updates {
  margin-top: 30px;
  text-align: left;
}
.products-services h3,
.news-updates h3 {
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
}
.service,
.news-updates article {
  margin-bottom: 20px;
}
.service img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.service h4 {
  font-size: 20px;
  margin-top: 10px;
  color: #007bff;
}
.service p,
.news-updates article p {
  font-size: 16px;
  color: #555;
}
.service a,
.news-updates article a {
  color: #007bff;
  text-decoration: none;
}
.service a:hover,
.news-updates article a:hover {
  text-decoration: underline;
}
.service {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-text {
  margin-top: 10px;
  text-align: center;
} 
@media (min-width: 1024px) {
  .service {
    flex-direction: row;
    align-items: flex-start;
  }
  .service img {
    width: 30%; 
    margin-right: 20px; 
  }
  .service-text {
    margin-top: 0;
    text-align: left;
  }
}
</style>