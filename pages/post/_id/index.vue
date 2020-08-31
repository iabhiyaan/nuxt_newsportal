<template>
  <section class="detail-page all-sec-padding">
    <div class="container">
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
  created() {
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
  },
  head() {
    const title = this.detail && this.detail.title;
    const description = this.detail && this.detail.title;
    const image = this.detail && this.detail.image;
    return {
      title: title
    };
  }
};
</script>

<style>
</style>