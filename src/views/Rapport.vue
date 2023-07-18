<template>
  <div>
    <p>Liste des dommages: </p>
    <br>
    <div v-for="(damage, index) in vehiculeStore.damage" :key="index">
      <p>Id: {{ damage.id }}</p>
      <p>Détéction automatique: {{ damage.isAuto }}</p>
      <p>Localisation: {{ damage.location }} </p>
      <p>Severity: {{ damage.severity }}</p>
      <br>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVehicleStore } from '@/stores/tchek';

const vehiculeStore = useVehicleStore();
</script>
