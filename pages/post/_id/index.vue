<template>
  <section class="detail-page all-sec-padding">
    <div class="container">
      <a href="#" class="long-ad inner-ad">
        <img src="~/assets/images/OK_Desktop.gif" alt="ad" />
      </a>
      <div class="loader" v-if="isLoading"></div>
      <div class="detail-wrapper" v-else>
        <h1>{{ getProcessDetail && getProcessDetail.title }}</h1>
        <div class="detail-image">
          <img
            class="w-100"
            :src="`http://localhost:8000/images/main/${getProcessDetail && getProcessDetail.image}`"
            alt="detail-news"
          />
        </div>
        <div class="date-share-wrapp">
          <span class="date">{{ getProcessDetail.created_at }}</span>
        </div>
        <div class="row detail-ad">
          <div class="col-lg-3 col-md-3 col-6">
            <a href="#" class="small-ad">
              <img src="~/assets/images/mahindra-300.gif" alt="ad" />
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6">
            <a href="#" class="small-ad">
              <img src="~/assets/images/hero-ads.jpg" alt="ad" />
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6">
            <a href="#" class="small-ad">
              <img src="~/assets/images/ime-super-man_300x150.gif" alt="ad" />
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6">
            <a href="#" class="small-ad">
              <img src="~/assets/images/263-x-142.gif" alt="ad" />
            </a>
          </div>
        </div>
        <div class="detail-content">
          <div v-html="getProcessDetail.description"></div>
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
      detail: null,
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
        .get(`/post/${this.$route.params.id}`)
        .then(({ data }) => {
          this.detail = data.data;
          let a = new NepaliDate(this.detail.created_at);
          this.detail.created_at = a.format("ddd DD, MMMM YYYY", "np");
          this.isLoading = false;
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    getProcessDetail() {
      if (!this.detail) {
        return;
      }
      return this.detail;
    }
  }
};
</script>

<style>
</style>