<template>
  <div>
    <p>Liste des dommages du véhicule {{vehiculeStore.immat}}: </p>
    <br>
    <Card></Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/card/card.vue'
import { useVehicleStore } from '@/stores/tchek';
import { useLocationFilter, useTypeFilter,  useSeverityFilter} from '@/stores/filter';

const vehiculeStore = useVehicleStore();
const locationFilter = useLocationFilter();
const severityFilter = useSeverityFilter();
const typeFilter = useTypeFilter();

const getLocationName = (locationCode: string) => {
  const matchingLocation = locationFilter.data?.find(location => location.code === locationCode);
  return matchingLocation ? matchingLocation.name : 'Inconnu';
};

const getSeverityName = (severityKey: string) => {
  const mactchingSeverity = severityFilter.data?.find(severity => severity.key === severityKey);
  return mactchingSeverity ? mactchingSeverity.name : 'Inconnu';
}

const getTypeName = (typeKey: string) => {
  const matchingType  = typeFilter.data?.find(type => type.key === typeKey);
  return matchingType ? matchingType.name : 'Inconnu';
}

const getImageUrl = (imageId: string) => {
  const matchingImage = vehiculeStore.images?.find(image => image.id === imageId)
  return matchingImage ? matchingImage.url : 'Inconnu';
}
</script>
