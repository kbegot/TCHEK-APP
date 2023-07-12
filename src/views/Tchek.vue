<template>
    <div>
        <h1 class="text-center bold">IFrame Tchek Testing</h1>
        <ul> {{ vehiculeStore.clientLastName }}
            
        </ul>
            <iframe class="w-full h-[850px]" :class="[!isValide ? 'block' : 'hidden']" id="iframe" :src="iframeSrc"
                allow="camera *;microphone *"></iframe>
    </div>
    <div class="flex justify-center pt-2 bg-white">
        <button class="p-3 text-white bg-green-600 rounded-md" :class="[!isValide ? 'block' : 'hidden']"
            @click="valider">Valider</button>
        <a class="p-3 text-white bg-green-600 rounded-md" :class="[isValide ? 'block' : 'hidden']"
            :href="rapportSrc">Cliquez pour voir le rapport</a>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useVehicleStore }from '@/stores/tchek';
import axios from 'axios';
const isValide = ref(false);
const iframeSrc = ref('');
const rapportSrc = ref('');
const vehiculeStore = useVehicleStore();
let token = '';


const valider = async () => {
    isValide.value = true;
    useVehicleStore().getTchekReport()
};

onMounted(async () => {
    try {
        const response = await axios.post('https://alto.tchek.fr/apiV1/tokenmanager/token', {
            validity: 5, // en jours
            shootInspect: true,
            fastTrack: true,
            report: true,
            cost: false,
            downloadRoi: false
        }, {
            headers: {
                'X-API-Key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        token = response.data.token.uid;
        iframeSrc.value = `https://webapp.tchek.fr/fr/pwa/sso/intro-shoot-inspect?token=${token}`;
        rapportSrc.value = `https://webapp.tchek.fr/fr/report?token=${token}`;
    } catch (error) {
        console.error(error);
    }
});
</script>
