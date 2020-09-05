<template>
  <div>
    <a id="button"></a>

    <!-- footer section starts -->

    <footer>
      <div class="main-footer all-sec-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-col-wrapper">
                <nuxt-link to href="/" class="footer-logo">
                  <img src="~/assets/images/logo.png" />
                </nuxt-link>
                <ul>
                  <li>Executive by Mulukikhabar</li>
                  <li>Cheif-Editor : Ramesh Dhakal</li>
                  <li>Editor : Abhiyan Shrestha</li>
                </ul>
                <ul class="footer-social-media">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-col-wrapper">
                <h3>Address</h3>
                <ul>
                  <li>{{dashboard && dashboard.phone}}</li>
                  <li>{{dashboard && dashboard.address}}</li>
                  <li>
                    <a href="#">{{dashboard && dashboard.email}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-col-wrapper">
                <h3>Quick Link</h3>
                <ul>
                  <li>
                    <nuxt-link to="/samaj">समाज</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/politics">राजनीति</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/economics">अर्थ</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/thoughts">विचार</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/world">विश्व</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/prabhas">प्रवास</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/tourisim">पर्यटन</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/education">शिक्षा</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-section">
        <div class="container">
          <p>
            Copyright © 2020 Mulukikhabar. All Rights Reserved. Website by
            <a
              href="#"
            >Abhiyan Shrestha</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "@/axios.settings.js";

export default {
  data() {
    return {
      dashboard: null,
    };
  },
  mounted() {
    this.getDashboard();
  },
  methods: {
    getDashboard() {
      axios
        .get()
        .then((res) => {
          this.dashboard = res.data.dashboard;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>