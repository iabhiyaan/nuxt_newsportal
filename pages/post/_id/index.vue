<template>
  <section class="detail-page all-sec-padding">
    <div class="container">
      <div class="loader" v-if="isLoading"></div>
      <div class="detail-wrapper" v-else>
        <h1>{{ getProcessDetail && getProcessDetail.title }}</h1>
        <div class="detail-image">
          <img
            class="w-100"
            :src="`${url && url}/images/main/${getProcessDetail && getProcessDetail.image}`"
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
import { MAIN_URL } from "@/others.js";
import { createSEOMeta } from "@/others.js";

export default {
  data() {
    return {
      detail: null,
      isLoading: true,
      dateLoader: true,
      url: null,
    };
  },
  head() {
    const title = this.getProcessDetail && this.getProcessDetail.title;
    const description = this.getProcessDetail && this.getProcessDetail.title;
    const image = this.getProcessDetail && this.getProcessDetail.image;
    return {
      title: title,
      meta: createSEOMeta({ description, title, image }),
    };
  },
  mounted() {
    this.getData();
    this.url = MAIN_URL;
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
        .catch((err) => console.log(err));
    },
  },
  computed: {
    getProcessDetail() {
      if (!this.detail) {
        return;
      }
      return this.detail;
    },
  },
};
</script>

<style>
</style>