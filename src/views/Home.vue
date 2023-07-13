<template>
  <div class="">
    <p>ici la home</p>
    <button class="p-3 text-white bg-green-600 rounded-md"
            @click="tchekValid">Valider la Reprise Tchek</button>
  </div>
</template>


<script setup>
import { useVehicleStore } from '@/stores/tchek';



const tchekValid = async () => {

    await useVehicleStore().getTchekReport();

};
</script>