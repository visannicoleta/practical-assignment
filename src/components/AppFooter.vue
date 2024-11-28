<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section about">
        <h2 class="logo-text"><span>ING</span>Bank</h2>
        <p>
          ING Bank is a leading provider of amazing services and products. Our
          mission is to provide high-quality solutions for our valued customers.
        </p>
        <div class="contact">
          <span><i class="fas fa-phone"></i> &nbsp; +123-456-789</span>
          <span><i class="fas fa-envelope"></i> &nbsp; info@ing.bank</span>
        </div>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-section contact-form">
        <h2>Contact Us</h2>
        <br />
        <form action="#" method="post">
          <input
            type="email"
            name="email"
            class="text-input contact-input"
            placeholder="Your email address..."
          />
          <textarea
            name="message"
            class="text-input contact-input"
            placeholder="Your message..."
          ></textarea>
          <button type="submit" class="btn btn-small">
            <i class="fas fa-envelope"></i> Send
          </button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">&copy; ingbank.com | Designed by ING Bank</div>
  </footer>
</template> <script>
export default { name: "AppFooter" };
</script> <style scoped>
footer {
  background: #d3d3d3;
  color: #d3d3d3;
  height: auto;
  position: relative;
  bottom: 0;
  width: 100%;
  padding-top: 20px;
  margin-top: 100px;
}
.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.footer-section {
  flex: 1;
  padding: 15px;
}
.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}
.logo-text span {
  color: #ff6600;
}
.contact,
.socials {
  margin: 10px 0;
}
.contact span,
.socials a {
  display: block;
  margin-bottom: 5px;
}
.contact span i,
.socials a i {
  color: #ff6600;
  margin-right: 5px;
}
.socials a {
  text-decoration: none;
}
socials a i {
  font-size: 1.2rem;
}
.footer-bottom {
  background: #202020;
  color: #686868;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.text-input {
  background: #3e3e42;
  border: none;
  padding: 5px;
  color: #d3d3d3;
  margin-bottom: 5px;
  width: 100%;
}
.btn-small {
  padding: 5px 10px;
  border: none;
  background: #ff6600;
  color: #fff;
  cursor: pointer;
}
.btn-small i {
  margin-right: 5px;
}
</style>