<script setup>
import JNavbar from './components/JNavbar.vue'
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <!-- <h1 class="text-2xl bg-sky-50">You did it!</h1> -->
  <JNavbar />
  <HeroSection title="Test Title" subTitle="Do not Scroll Down" />
  <HeroSection title="Jake the Dog" />
  <HeroSection title="Become a Football Player" />
</template>

<style scoped></style>
