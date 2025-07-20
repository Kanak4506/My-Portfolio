<script setup>
import TopBar from "./TopBar.vue";
import Footer from "./Footer.vue";
import Portfolio from "@/pages/Portfolio/portfolio.vue";

import { useRoute } from "vue-router";
const router = useRoute();

</script>

<template>
   <div class="tw-scroll-smooth">
      <TopBar />
      <Portfolio v-if="router.path === '/'" />
      <router-view />
      <Footer />
   </div>
</template>

<style scoped></style>
