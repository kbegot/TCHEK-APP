import { defineStore } from 'pinia'
import axios from 'axios';

interface State {
  token: string | null;
  clientLastName: string | null;
  immat: string | null;
  damage: Damage[] | null ;
  images: string | null;
}
interface Damage {
  id: string;
  isAuto: boolean;
  location: string;
  severity: string;
  type: string;
  roiPtr: RoiPointer;
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
  damage: [],
  images: null,
}

export const useVehicleStore = defineStore({
  id: 'Tchek',
  state: (): State => {
    return JSON.parse(JSON.stringify(initialState));
  },
  actions: {
    async getTchekToken(){
      await axios.post('https://alto.tchek.fr/apiV1/tokenmanager/token', {
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
      }).then((response) => {this.token = response.data.token.uid});
    },

    async getTchekReport() {
      await axios.get('https://alto.tchek.fr/apiV1/report/loadtchek', {
        params: {
          token: 'TEB8B11'
        },
        headers: {
          'X-API-Key': import.meta.env.VITE_API_KEY,
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        this.clientLastName = response.data.data.tchek.report.clientLastName;
        this.damage = response.data.data.damages.map((damage: object) => damage);
        this.images = response.data.data.images.map((images: object) => images)
      });
    }
    
  }  
});