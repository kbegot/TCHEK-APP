<template>
    <div>
        <div class="flex justify-center pt-1">
            <button class="flex p-3 text-white bg-green-600 rounded-md" :class="[!isTchekToken ? 'block' : 'hidden']"
                @click="tchekToken">Créer une reprise Tchek</button>
        </div>
        <p>{{ vehiculeStore.clientLastName }} </p> 
        <iframe class="w-full h-[850px]" :class="[(isTchekToken && !isTchekValid) ? 'block' : 'hidden']" id="iframe" :src="iframeSrc"
            allow="camera *;microphone *"></iframe>
    </div>
    <div class="flex justify-center pt-2 bg-white">
        <button class="p-3 text-white bg-green-600 rounded-md" :class="[(!isTchekValid && isTchekToken) ? 'block' : 'hidden']"
            @click="tchekValid">Valider la Reprise Tchek</button>
        <a class="p-3 text-white bg-green-600 rounded-md" :class="[isTchekValid ? 'block' : 'hidden']"
            :href="rapportSrc">Cliquez pour voir le rapport</a>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useVehicleStore } from '@/stores/tchek';
import axios from 'axios';

const isTchekValid = ref(false);
const isTchekToken = ref(false);
const iframeSrc = ref('');
const rapportSrc = ref('');
const vehiculeStore = useVehicleStore();

onMounted(async () => {
   console.log('onMounted: '+vehiculeStore.token); //TODO

   if (vehiculeStore.token !== null){
       setTchekData();
   }
});

const setTchekData = () => {
  isTchekToken.value = true;
  iframeSrc.value = `https://webapp.tchek.fr/fr/pwa/sso/intro-shoot-inspect?token=${vehiculeStore.token}`;
  rapportSrc.value = `https://webapp.tchek.fr/fr/report?token=${vehiculeStore.token}`;
};

const tchekToken = async () => {
    await useVehicleStore().getTchekToken();
    setTchekData();

    console.log('storeToken: '+vehiculeStore.token); //TODO 
}

const tchekValid = async () => {
    isTchekValid.value = true;
    await useVehicleStore().getTchekReport();
    console.log('storeNAME: '+ vehiculeStore.clientLastName);
};

</script>
