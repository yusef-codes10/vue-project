<script setup>
import jobData from '@/jobs.json'
import { ref } from 'vue'

const jobs = ref(jobData)
console.log(jobs.value)
</script>

<template>
  <h1>job</h1>
</template>

<style scoped></style>
