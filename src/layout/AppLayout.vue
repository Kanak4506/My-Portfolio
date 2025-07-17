<script setup>
import TopBar from "@/layout/TopBar.vue";
import Footer from "./Footer.vue";
</script>

<template>
   <div>
      <TopBar/>
      <router-view />
      <Footer/>
   </div>
</template>

<style scoped></style>
