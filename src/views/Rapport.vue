<template>
  <div>
    <p>Liste des dommages du véhicule {{vehiculeStore.immat}}: </p>
    <br>
    <div v-for="(damage, index) in vehiculeStore.damage" :key="index">
      <p>Id: {{ damage.id }}</p>
      <p>Détéction automatique: {{ damage.isAuto }}</p>
      <p>Localisation: {{ getLocationName(damage.location)+ ' (' + damage.location+')' }}</p>
      <p>Severity: {{ getSeverityName(damage.severity)+' (' + damage.severity+')' }}</p>
      <p>Type: </p>
      <br>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVehicleStore } from '@/stores/tchek';
import { useLocationFilter } from '@/stores/filter';
import { useSeverityFilter } from '@/stores/filter';

const vehiculeStore = useVehicleStore();
const locationFilter = useLocationFilter();
const severityFilter = useSeverityFilter();

const getLocationName = (locationCode: string) => {
  const matchingLocation = locationFilter.data?.find(location => location.code === locationCode);
  return matchingLocation ? matchingLocation.name : 'Inconnu';
};

const getSeverityName = (severityKey: string) => {
  const mactchingSeverity = severityFilter.data?.find(severity => severity.key === severityKey);
  return mactchingSeverity ? mactchingSeverity.name : 'Inconnu';
}
</script>
