<template>
  <header class="fixed top-0 left-0 w-[100%]">
    <!-- Mobile menu (hamburger) -->
    <nav class="top-0 items-center justify-between w-full h-16 px-3 py-5 text-center text-white bg-primary md:hidden">
      <button @click="toggleMenu" class="flex items-center justify-end w-full focus:outline-none">
        <img src="../../assets/menu.svg" :class="{'block': !isMenuOpen, 'hidden': isMenuOpen}" class="w-7">
        <img src="../../assets/error.svg" :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-7" @click.stop="toggleMenu">
      </button>
    </nav>

    <!-- Desktop menu -->
    <nav class="top-0 items-center justify-between hidden w-full h-16 px-3 py-5 text-center text-white bg-primary md:flex">
      <RouterLink v-for="link in links" :key="link.name" @click="toggleMenu" class="block hover:text-red-300" :to="{ name: link.name }">{{ link.label }}</RouterLink>
    </nav>

    <!-- Mobile menu items -->
    <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="w-full h-screen text-white md:hidden bg-primary">
      <div class="menu-transition">
        <div class="flex flex-col items-center px-3 py-5">
          <RouterLink v-for="link in links" :key="link.name" @click="toggleMenu" class="block py-2 hover:text-red-300" :to="{ name: link.name }">{{ link.label }}</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
  { name: 'home', label: 'HOME' },
  { name: 'tchek', label: 'TCHEK' },
  { name: 'rapport', label: 'Rapport' },
];
</script>
<style>

.menu-transition {
  animation-name: slideDown;
  animation-duration: 1s;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
