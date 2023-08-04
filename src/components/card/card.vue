<template>
  <div class="pb-10">
    <p>Liste des dommages du véhicule {{vehiculeStore.immat}}: </p>
    <Svg :damage="vehiculeStore.damage"></Svg>
  </div>
  <div v-for="(damage, index) in vehiculeStore.damage" :key="index" class="flex py-4">
    <div>
      <p>Id: {{ damage.id }}</p>
      <p>Détection automatique: {{ damage.isAuto }}</p>
      <p>Localisation: {{ getLocationName(damage.location)}} ({{ damage.location }})</p>
      <p>Severity: {{ getSeverityName(damage.severity )}} ({{ damage.severity }})</p>
      <p>Type: {{ getTypeName(damage.type)}} ({{ damage.type }})</p>
      <p>Svg Location:  {{ damage.svgLocation }}</p>
      <p>Images: ({{ damage.roiPtr.imagePtr.id }})</p>
      <p>Price: {{ getPrice(damage.location, damage.severity) }}</p>
      <img :src="getImageUrl(damage.roiPtr.imagePtr.id)" alt="" class="w-[200px]">
      </div>
    <Svg :damage="[damage]"></Svg>
  </div>
</template>
<script setup lang="ts">
import { useVehicleStore } from '../../stores/tchek';
import { useMatriceStore } from '../../stores/matrice'
import { useLocationFilter, useTypeFilter,  useSeverityFilter} from '../../stores/filter';
import Svg from '../patron/patron.vue';


const vehiculeStore = useVehicleStore();
const matriceStore = useMatriceStore();
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

function getSvgKey(key: string, location: string, svglocation: string, severity: string) {
 if(key === location + svglocation && (severity == 'SEV3' || severity =='SEV4' || severity =='SEV5')){
  return 'red'
 }
 if (key === location + svglocation && (severity == 'SEV0' || severity =='SEV1' || severity =='SEV2')) {
  return 'blue'
 } else {
  return
 }

}

function getPrice(loc: string, sev: string) {
 const matchingMatrice = matriceStore.data?.find(matrice => matrice.location === loc && matrice.severity === sev)
 return matchingMatrice ? matchingMatrice.price : 'Pas de prix';
} 

</script>