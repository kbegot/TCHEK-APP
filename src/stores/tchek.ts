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
export interface Damage {
  id: string;
  isAuto: boolean;
  isDeleted: boolean;
  location: string;
  severity: string;
  type: string;
  listRoiPtr: Array<RoiPointer>;
  svgLocation: string;
}
interface RoiPointer {
  imagePtr: ImagePointer;
}

interface ImagePointer {
  id: string;
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
            cost: false,
            report: false,
            downloadRoi: false
        }, {
            headers: {
                'X-API-Key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
            },
      }).then((response) => {this.token = response.data.token.uid});
    },

    async getTchekReport(damageValue: any, imageValue: any) {

      this.damage = damageValue.filter((damage: Damage) => !damage.isDeleted);
      this.images = imageValue.map((images: object) => images)
      console.log('this damage'+ this.damage)
      
    }
    
  }  
});