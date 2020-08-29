<template>
  <div>
    <!-- top news-with-no-image -->
    <div class="container">
      <a href="#" class="long-ad">
        <img src="~/assets/images/1140x90_7.gif" alt="ad" />
      </a>
    </div>

    <!-- samachar section starts -->

    <section class="samachar-section all-sec-padding">
      <div class="container">
        <div class="title-wrapper">
          <h2>समाज</h2>
          <a href="#" class="all-btn">
            सबै हेर्नुहोस
            <span class="view-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
        <div class="row">
          <div class="col-6" v-if="isLoading">
            <div class="loader"></div>
          </div>
          <div class="col-6" v-if="isLoading">
            <div class="loader"></div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-12"
            v-for="samajPost in getTwoSamajPosts"
            :key="samajPost.id"
          >
            <a href="#" class="samachar-wrapper all-news-image">
              <img :src="`http://localhost:8000/images/medium/${samajPost.image}`" alt="samachar" />
              <div class="title-medium samachar-title">
                <h2>{{ samajPost.title }}</h2>
                <div class="date_loader" v-if="dateLoader"></div>
                <span class="date" v-else>{{samajPost.created_at}}</span>
              </div>
            </a>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-12"
            v-for="samaj2 in getOtherSamajPosts"
            :key="samaj2.id"
          >
            <div class="samachar-small-news">
              <a href="#" class="all-news-image">
                <img :src="`http://localhost:8000/images/medium/${samaj2.image}`" alt="samachar" />
              </a>
              <div class="title-medium samachar-small-title">
                <a href="#">
                  <h2>{{ samaj2.title }}</h2>
                </a>
                <div class="date_loader" v-if="dateLoader"></div>
                <span class="date" v-else>{{samaj2.created_at}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- samachar section ends -->

    <div class="container">
      <a href="#" class="long-ad">
        <img
          src="~/assets/images/Online-khabar-Home-Page-Top-Banner-1230X100Px-WXH_gif.gif"
          alt="ad"
        />
      </a>
    </div>

    <!-- desh section starts -->
  </div>
</template>

<script>
import axios from "@/axios.settings.js";

export default {
  data() {
    return {
      samaj: null,
      isLoading: true,
      dateLoader: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get()
        .then(({ data }) => {
          this.samaj = data.samaj;
          this.isLoading = false;
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    samajPosts() {
      return this.samaj && this.samaj.posts;
    },
    getTwoSamajPosts() {
      return (
        this.samaj &&
        this.samajPosts &&
        this.samajPosts.slice(0, 2).map(post => {
          axios
            .get(`/date/${post.created_at}`)
            .then(res => {
              this.dateLoader = false;
              return (post.created_at = res.data);
            })
            .catch(err => console.log(err));
          return post;
        })
      );
    },
    getOtherSamajPosts() {
      return (
        this.samaj &&
        this.samajPosts &&
        this.samajPosts.slice(2, 6).map(post => {
          axios
            .get(`/date/${post.created_at}`)
            .then(res => {
              this.dateLoader = false;
              return (post.created_at = res.data);
            })
            .catch(err => console.log(err));
          return post;
        })
      );
    }
  }
};
</script>

<style>
.loader {
  height: 400px;
  width: 100%;
  background: #cccccc7a;
  margin-bottom: 30px;
}
.date_loader {
  height: 20px;
  width: 30%;
  background: #cccccc7a;
  margin-bottom: 30px;
}
</style>