<script setup>
import HeroSection from './components/HeroSection.vue'
import HomeCards from './components/HomeCards.vue'
import JobListings from './components/JobListings.vue'
</script>

<template>
  <HeroSection title="Test Title" subTitle="Do not Scroll Down" />
  <HomeCards />
  <JobListings limit="3" :showButton="true" />
</template>
