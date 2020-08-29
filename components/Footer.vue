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
                  <li>Executive by nepaluk news</li>
                  <li>Cheif-Editor : Ramesh Dhakal</li>
                  <li>Editor : Db Ghale</li>
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
                    <a href="#">राजनीति</a>
                  </li>
                  <li>
                    <a href="#">खेलकुद</a>
                  </li>
                  <li>
                    <a href="#">विजनेश</a>
                  </li>
                  <li>
                    <a href="#">मनोरन्जन</a>
                  </li>
                  <li>
                    <a href="#">भीडियो</a>
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
            >Web House Nepal</a>
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
      dashboard: null
    };
  },
  mounted() {
    this.getDashboard();
  },
  methods: {
    getDashboard() {
      axios
        .get()
        .then(res => {
          this.dashboard = res.data.dashboard;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>