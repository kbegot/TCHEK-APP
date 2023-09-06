<template>
    <div>
        <div class="flex justify-center pt-1">
            <button class="flex p-3 text-white bg-green-600 rounded-md" :class="[!isTchekToken ? 'block' : 'hidden']"
                @click="tchekToken">Créer une reprise Tchek</button>
        </div>
        <p>{{ vehiculeStore.clientLastName }} </p> 
        <iframe ref="myIframe" class="w-full h-[850px]" :class="[(isTchekToken && !isTchekValid) ? 'block' : 'hidden']" id="iframe" :src="iframeSrc"
            allow="camera *;microphone *"></iframe>
    </div>
    <div class="flex justify-center pt-2 bg-white">
        <button class="p-3 text-white bg-green-600 rounded-md" :class="[(!isTchekValid && isTchekToken) ? 'block' : 'hidden']"
            @click="tchekValid">Valider la Reprise Tchek</button>
        <a class="p-3 text-white bg-green-600 rounded-md" :class="[isTchekValid ? 'block' : 'hidden']"
            :href="rapportSrc">Cliquez pour voir le rapport</a>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useVehicleStore } from '@/stores/tchek';


const isTchekValid = ref(false);
const isTchekToken = ref(false);
const iframeSrc = ref('');
const rapportSrc = ref('');
const vehiculeStore = useVehicleStore();
let damageValue = ref('');
let imageValue = ref('');
const dataFromIframe = ref(null);
const iframeRef = ref<HTMLIFrameElement | null>(null);

onMounted(async () => {
   console.log('onMounted: '+vehiculeStore.token); //TODO

   const messageHandler = (event: any) => {
       // Affichez tous les messages entrants dans la console
       console.log('Message reçu de l\'iframe :', event.data);
    
       try {
           const eventData = JSON.parse(event.data);

           if (eventData.tchek && eventData.tchek.damages) {
               damageValue = eventData.tchek.damages;
               console.log('Valeur de damage :', damageValue);
           } else {
               console.error('Damages introuvable');
           }
        
           if (eventData.tchek && eventData.tchek.images) {
               imageValue = eventData.tchek.images
           } else {
               console.error('Images introuvable');
           }
           window.removeEventListener('message', messageHandler); // Supprime l'event listener ici
       } catch (error) {
           console.error('Erreur analyse de event.data', error);
       }
   };

   window.addEventListener('message', messageHandler); // Ajoute l'event listener ici

   if (vehiculeStore.token !== null){
       setTchekData();
   }
});
const setTchekData = () => {
  isTchekToken.value = true;
  iframeSrc.value = `https://preprod.webapp.tchek.fr/fr/services/${vehiculeStore.token}`;
  rapportSrc.value = `https://preprod.webapp.tchek.fr/fr/report?token=${vehiculeStore.token}`;
};

const tchekToken = async () => {
    await useVehicleStore().getTchekToken();
    setTchekData();

    console.log('storeToken: '+vehiculeStore.token); //TODO 
}

const tchekValid = async () => {
    isTchekValid.value = true;
    await useVehicleStore().getTchekReport(damageValue, imageValue);
    console.log('damage'+damageValue);
    console.log('iamge'+imageValue);
    console.log('storeNAME: '+ vehiculeStore.clientLastName);
};

</script>
