<script setup>
// this is how we have props
import { defineProps } from 'vue'
defineProps(
  // an object of the props that we want
  {
    title: {
      type: String,
      //   this is the default (in case no props passed)
      default: 'Become a Vue Dev',
    },
  },
)
</script>

<template>
  <section class="bg-green-700 py-20 mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{{ title }}</h1>
        <p class="my-4 text-xl text-white">Find the Vue job that fits your skills and needs</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
