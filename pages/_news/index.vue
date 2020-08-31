<template>
  <section class="list-page all-sec-padding">
    <div class="container">
      <div class="title-wrapper list-title">
        <div class="small__loader" v-if="isLoading"></div>
        <h2 v-else>{{category && category.title}}</h2>
      </div>
      <div class="row">
        <div class="col-lg-9 col-md-9 col-12" v-if="isLoading">
          <div class="loading w-100"></div>
          <div class="loading w-100"></div>
          <div class="loading w-100"></div>
        </div>
        <div class="col-lg-9 col-md-9 col-12" v-else>
          <div class="list-wrapper" v-for="post in getPosts" :key="post.id">
            <nuxt-link :to="`/post/${post.slug}`" class="list-image all-news-image">
              <img :src="`http://localhost:8000/images/main/${post.image}`" />
            </nuxt-link>
            <div class="list-content">
              <nuxt-link :to="`/post/${post.slug}`" class="list-title-wrapp samachar-small-title">
                <h2>{{post.title}}</h2>
              </nuxt-link>
              <span class="date">{{post.created_at}}</span>
              <p>{{post.short_description}}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <nuxt-link to="#" class="small-ad">
            <img src="~/assets/images/mahindra-300.gif" alt="ad" />
          </nuxt-link>
          <nuxt-link to="#" class="small-ad">
            <img src="~/assets/images/hero-ads.jpg" alt="ad" />
          </nuxt-link>
          <nuxt-link to="#" class="small-ad">
            <img src="~/assets/images/ime-super-man_300x150.gif" alt="ad" />
          </nuxt-link>
          <nuxt-link to="#" class="small-ad">
            <img src="~/assets/images/263-x-142.gif" alt="ad" />
          </nuxt-link>
          <nuxt-link to="#" class="small-ad">
            <img src="~/assets/images/Monica-online-11.gif" alt="ad" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "@/axios.settings.js";
import NepaliDate from "nepali-date-converter";
export default {
  data() {
    return {
      posts: null,
      category: null,
      isLoading: true
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`/${this.$route.params.news}`)
        .then(({ data }) => {
          this.category = data.category;
          this.posts = data.data;
          this.isLoading = false;
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    getPosts() {
      return (
        this.posts &&
        this.posts.map(post => {
          let a = new NepaliDate(post.created_at);
          post.created_at = a.format("ddd DD, MMMM YYYY", "np");
          return post;
        })
      );
    }
  },
  head() {
    const title = this.category && this.category.title;
    return {
      title: title
    };
  }
};
</script>

<style>
.loading {
  height: 200px;
  width: 100%;
  background: #cccccc7a;
  margin-bottom: 30px;
}

.small__loader {
  width: 60px;
  height: 40px;
  font-weight: 600;
  background: #cccccc7a;
}
</style>