import { defineStore } from 'pinia'
import axios from 'axios';

interface State {
  token: string | null;
  clientLastName: string | null;
  immat: string | null;
  damage: Damage[] | null ;
  images: Image[] | null;
}
interface Image {
  id: string;
  url: string;
}
interface Damage {
  id: string;
  isAuto: boolean;
  isDeleted: boolean;
  location: string;
  severity: string;
  type: string;
  roiPtr: RoiPointer;
  svgLocation: string;
}
interface RoiPointer{
  imagePtr: ImagePointer
}
interface ImagePointer{
  id: string
}

const initialState = {
  token: null,
  clientLastName: null,
  immat: null,
  damage: null,
  images: null,
}

export const useVehicleStore = defineStore({
  id: 'Tchek',
  state: (): State => {
    return JSON.parse(JSON.stringify(initialState));
  },
  actions: {
    async getTchekToken(){
      await axios.post('https://preprod.alto.tchek.fr/apiV1/tokenmanager/token', {
            validity: 5, // en jours
            shootInspect: true,
            fastTrack: true,
            report: true,
            cost: true,
            downloadRoi: true
        }, {
            headers: {
                'X-API-Key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
            },
      }).then((response) => {this.token = response.data.token.uid});
    },

    async getTchekReport() {
      await axios.get('https://preprod.alto.tchek.fr/apiV1/report/loadtchek', {
        params: {
          token: 'TEA5F10' //T8C7C4A roue
                           //TEE3F6A sans roue
                           //TDAF74E all 
                           //TEA5F10 vraie data
        },
        headers: {
          'X-API-Key': import.meta.env.VITE_API_KEY,
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        this.clientLastName = response.data.data.tchek.report.clientLastName;
        this.damage = response.data.data.damages.filter((damage: Damage) => !damage.isDeleted);
        this.images = response.data.data.images.map((images: object) => images)
      });
    }
    
  }  
});