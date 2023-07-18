<template>
  <div>
    <p>Liste des dommages du véhicule {{vehiculeStore.immat}}: </p>
    <br>
    <div v-for="(damage, index) in vehiculeStore.damage" :key="index">
      <p>Id: {{ damage.id }}</p>
      <p>Détéction automatique: {{ damage.isAuto }}</p>
      <p>Localisation: {{ getLocationName(damage.location) }}</p>
      <p>Severity: {{ damage.severity }}</p>
      <br>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVehicleStore } from '@/stores/tchek';
import { uselocationFilter } from '@/stores/filter';

const vehiculeStore = useVehicleStore();
const locationFilter = uselocationFilter();

const getLocationName = (locationCode: string) => {
  const matchingLocation = locationFilter.data?.find(location => location.code === locationCode);
  return matchingLocation ? matchingLocation.name : 'Emplacement inconnu';
};
</script>
