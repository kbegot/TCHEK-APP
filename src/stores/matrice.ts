import { defineStore } from 'pinia'


interface MatriceState {
    data: Matrice [] | null
}
interface Matrice {
    location: string;
    name: string;
    severity: string;
    price: number;
}

const initialState = {
    data: [
    {location: "PRCAV", name: "PARE-CHOC AVANT", severity: "SEV3", price: 500},
    {location: "AILAVG", name: "AILE AVANT GAUCHE", severity: "SEV3", price: 356},
    {location: "ROUAVG", name: "ROUE AVANT GAUCHE", severity: "SEV3", price: 228},
    ]
}


export const useMatriceStore = defineStore({
    id: 'matrice',
    state: (): MatriceState => {
      return JSON.parse(JSON.stringify(initialState));
    },
});