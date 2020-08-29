<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.nuxt-progress {
  background-color: green;
  height: 4px;
}
</style>
