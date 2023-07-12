<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar/navbar.vue'
</script>

<template>
  <div class="bg-gray-100">
    <Navbar/>
    <div class="mt-[64px]">
      <RouterView />
    </div>
  </div>
</template>
