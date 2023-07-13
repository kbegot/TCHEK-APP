<template>
    <header class="fixed top-0 left-0 w-[100%]">
      <nav class="flex justify-between px-3 top-0 w-full py-5 bg-[#de2630] text-white items-center">
        <RouterLink class="w-28" :to="{ name: 'home' }">HOME</RouterLink>  
        <RouterLink class=" hover:text-red-300 w-28" :to="{ name: 'tchek' }">TCHEK</RouterLink>
        <RouterLink class="hover:text-red-300 w-28" :to="{ name: 'rapport'}">Rapport</RouterLink>
      </nav>
      <div>
  
      </div>
    </header>
  
  </template>
  
  
  <style>
  nav ul li ul {
    display: none;
  }
  </style>
  
  <script setup lang="ts">
  import type { Ref } from 'vue';
  import {ref } from 'vue';
      const showDropdown: Ref<boolean> = ref(false);
      const showDropdown2: Ref<boolean> = ref(false);
  </script>