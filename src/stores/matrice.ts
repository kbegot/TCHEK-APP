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

const initialState = { data: [
    {location: "PRCAV", name: "PARE-CHOC AVANT", severity: "SEV1", price: 500},
    {location: "PRCAV", name: "PARE-CHOC AVANT", severity: "SEV2", price: 502},
    {location: "PRCAV", name: "PARE-CHOC AVANT", severity: "SEV3", price: 504},

    {location: "RTRG", name: "RÉTROVISEUR GAUCHE", severity: "SEV1", price: 204},
    {location: "RTRG", name: "RÉTROVISEUR GAUCHE", severity: "SEV2", price: 404},
    {location: "RTRG", name: "RÉTROVISEUR GAUCHE", severity: "SEV3", price: 604},

    {location: "PRTAVG", name: "PORTE AVANT GAUCHE", severity: "SEV1", price: 200},
    {location: "PRTAVG", name: "PORTE AVANT GAUCHE", severity: "SEV2", price: 400},
    {location: "PRTAVG", name: "PORTE AVANT GAUCHE", severity: "SEV3", price: 600},

    {location: "AILAVG", name: "AILE AVANT GAUCHE", severity: "SEV1", price: 356},
    {location: "AILAVG", name: "AILE AVANT GAUCHE", severity: "SEV2", price: 357},
    {location: "AILAVG", name: "AILE AVANT GAUCHE", severity: "SEV3", price: 358},

    {location: "ROUAVG", name: "ROUE AVANT GAUCHE", severity: "SEV1", price: 220},
    {location: "ROUAVG", name: "ROUE AVANT GAUCHE", severity: "SEV2", price: 228},
    {location: "ROUAVG", name: "ROUE AVANT GAUCHE", severity: "SEV3", price: 288},

    {location: "PRTARG", name: "PORTE ARRIERE GAUCHE", severity: "SEV1", price: 220},
    {location: "PRTARG", name: "PORTE ARRIERE GAUCHE", severity: "SEV2", price: 340},
    {location: "PRTARG", name: "PORTE ARRIERE GAUCHE", severity: "SEV3", price: 404},

    {location: "PGNARG", name: "POIGNÉE ARRIERE GAUCHE", severity: "SEV1", price: 204},
    {location: "PGNARG", name: "POIGNÉE ARRIERE GAUCHE", severity: "SEV2", price: 304},
    {location: "PGNARG", name: "POIGNÉE ARRIERE GAUCHE", severity: "SEV3", price: 404},
    ]}


export const useMatriceStore = defineStore({
    id: 'matrice',
    state: (): MatriceState => {
      return JSON.parse(JSON.stringify(initialState));
    },
});