import { defineStore } from 'pinia'
import axios from 'axios';

interface State {
  token: string | null;
  clientLastName: string | null;
}

const initialState = {
  token: null,
  clientLastName: null
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
            token: 'T99D610'
          },
          headers: {
            'X-API-Key': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          console.log(response.data.data.damages);
          
        });
    }
  }  
});

