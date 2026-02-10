<script setup>
import JNavbar from './components/JNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import HomeCards from './components/HomeCards.vue'
import JobListings from './components/JobListings.vue'
</script>

<template>
  <!-- <h1 class="text-2xl bg-sky-50">You did it!</h1> -->
  <JNavbar />
  <HeroSection title="Test Title" subTitle="Do not Scroll Down" />
  <HomeCards />
  <JobListings limit="3" />
</template>

<style scoped></style>
