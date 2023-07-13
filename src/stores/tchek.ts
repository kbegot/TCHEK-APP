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
    async getTchekReport(){
      try {
        const response = await axios.get('https://alto.tchek.fr/apiV1/report/loadtchek', {
          params: {
            token: this.token
          },
          headers: {
            'X-API-Key': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json',
          },
        });
    
        if (response.data && response.data.tchek && response.data.tchek.report) {
          this.clientLastName = response.data.tchek.report.clientLastName;
        } else {
            
        }
      } catch (error) {
      }
   },
  
  },

});

