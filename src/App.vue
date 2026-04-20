<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const route = useRoute()
</script>

<template>
  <Navbar v-if="!route.meta.hideNavbar" />
  <RouterView />
  <Footer v-if="!route.meta.hideNavbar" />
</template>
