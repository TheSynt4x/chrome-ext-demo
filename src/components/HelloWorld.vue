<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>gege</h2>
  <button @click="count++">count is: {{ count }}</button>
</template>
