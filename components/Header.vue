<template>
  <div>
    <header id="header">
      <div class="top-header">
        <div class="container">
          <div class="top-head-wrapp row">
            <div
              class="col-lg-4 col-md-4 col-8 order-lg-first order-md-first order-sm-second order-scond"
            >
              <nuxt-link to="/" class="logo">
                <img src="~/assets/images/logo.png" alt="logo" />
              </nuxt-link>
            </div>
            <div
              class="col-lg-6 col-md-6 col-12 order-lg-second order-md-second order-sm-first order-first"
            >
              <nuxt-link to="#" class="header-ad">
                <img src="~/assets/images/860x100.png" alt="ad" />
              </nuxt-link>
            </div>
            <div class="col-lg-2 col-md-2 col-4">
              <nuxt-link to="#" class="epaper-icon">
                <img src="~/assets/images/epaper-icon.png" alt="epaper" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header">
        <div class="container">
          <div class="top-menu-bar">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
          </div>
          <nav id="main-nav">
            <div class="top-menu-bar1">X</div>
            <ul>
              <li>
                <nuxt-link to="/">गृहपृष्‍ठ</nuxt-link>
              </li>
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
                <nuxt-link to="#">
                  अन्य
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </nuxt-link>
                <ul class="sub-menu">
                  <li>
                    <nuxt-link to="/education">शिक्षा</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <div class="header-base"></div>
  </div>
</template>

<script>
export default {};
</script>
