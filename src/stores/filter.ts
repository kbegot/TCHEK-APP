import { defineStore } from 'pinia'
interface StateLocationFilter {
    data: Location[] | null
  }
  interface Location {
    id: string;
    code: string;
    name: string;
  }
  
  const initialStateLocationFilter = {
    data: [
      { id: "01", code:"AILAVG", name: "AILE AVANT GAUCHE" },
      { id: "02", code:"ROUAVG", name: "ROUE AVANT GAUCHE" },
      { id: "03", code:"RTRG", name: "RÉTROVISEUR GAUCHE" },
      { id: "04", code:"PRTAVG", name: "PORTE AVANT GAUCHE" },
      { id: "05", code:"PGNAVG", name: "POIGNÉE AVANT GAUCHE" },
      { id: "06", code:"VTRAVG", name: "VITRE AVANT GAUCHE" },
      { id: "07", code:"PRTARG", name: "PORTE ARRIERE GAUCHE" },
      { id: "08", code:"PGNARG", name: "POIGNÉE ARRIERE GAUCHE" },
      { id: "09", code:"VTRARG", name: "VITRE ARRIERE GAUCHE" },
      { id: "10", code:"CSTARG", name: "CUSTODE ARRIERE GAUCHE" },
      { id: "11", code:"ROUARG", name: "ROUE ARRIERE GAUCHE" },
      { id: "12", code:"AILARG", name: "AILE ARRIERE GAUCHE" },
      { id: "13", code:"TRP", name: "TRAPPE" },
      { id: "14", code:"BDCG", name: "BAS DE CAISSE GAUCHE" },
      { id: "15", code:"OPTARG", name: "OPTIQUE ARRIERE GAUCHE" },
      { id: "16", code:"PRCAR", name: "OPTIQUE ARRIERE GAUCHE" },
      { id: "17", code:"CFR", name: "COFFRE ARRIERE" },
      { id: "18", code:"PRBAR", name: "PARE-BRISE ARRIERE" },
      { id: "19", code:"OPTARD", name: "OPTIQUE ARRIERE DROIT" },
      { id: "20", code:"ROUARD", name: "ROUE ARRIERE DROIT" },
      { id: "21", code:"AILARD", name: "AILE ARRIERE DROIT" },
      { id: "22", code:"CSTARD", name: "CUSTODE ARRIERE DROIT" },
      { id: "23", code:"PRTARD", name: "PORTE ARRIERE DROIT" },
      { id: "24", code:"PGNARD", name: "POIGNÉE ARRIERE DROIT" },
      { id: "25", code:"VTRARD", name: "VITRE ARRIERE DROIT" },
      { id: "26", code:"PRTAVD", name: "PORTE AVANT DROIT" },
      { id: "27", code:"PGNAVD", name: "POIGNÉE AVANT DROIT" },
      { id: "28", code:"VTRAVD", name: "VITRE AVANT DROIT" },
      { id: "29", code:"RTRD", name: "RÉTROVISEUR DROIT" },
      { id: "30", code:"ROUAVD", name: "ROUE AVANT DROIT" },
      { id: "31", code:"AILAVD", name: "AILE AVANT DROIT" },
      { id: "32", code:"BDCD", name: "BAS DE CAISSE DROIT" },
      { id: "33", code:"PRCAV", name: "PARE-CHOC AVANT" },
      { id: "34", code:"ABRAVD", name: "ANTIBROUILLARD AVANT DROIT" },
      { id: "35", code:"ABRAVG", name: "AVANT GAUCHE" },
      { id: "36", code:"OPTAVD", name: "OPTIQUE AVANT DROIT" },
      { id: "37", code:"CLR", name: "CALANDRE" },
      { id: "38", code:"OPTAVG", name: "OPTIQUE AVANT GAUCHE" },
      { id: "39", code:"CPT", name: "CAPOT" },
      { id: "40", code:"PRBAV", name: "PARE-BRISE AVANT" },
      { id: "41", code:"TOI", name: "TOIT" },
      { id: "42", code:"PHRAVG", name: "PHARE AVANT GAUCHE" },
      { id: "43", code:"PHRARD", name: "PHARE ARRIERE DROIT" },
      { id: "44", code:"PHRAVD", name: "PHARE AVANT DROIT" },
      { id: "45", code:"PHRARG", name: "PHARE ARRIERE GAUCHE" },
      { id: "46", code:"BDCAVG", name: "BAS DE CAISSE AVANT GAUCHE" },
      { id: "47", code:"BDCAVD", name: "BAS DE CAISSE AVANT DROIT" },
      { id: "48", code:"BDCARG", name: "BAS DE CAISSE ARRIERE GAUCHE" },
      { id: "49", code:"BDCARD", name: "BAS DE CAISSE ARRIERE DROIT" },
      { id: "50", code:"RTRAVD", name: "RÉTROVISEUR DROIT" },
      { id: "51", code:"RTRAVG", name: "RÉTROVISEUR GAUCHE" },
      { id: "52", code:"JUPAR", name: "JUPE ARRIERE" },
      { id: "53", code:"JUPAV", name: "JUPE AVANT" },
      { id: "54", code:"TRPARG", name: "TRAPPE ARRIERE GAUCHE" },
      { id: "55", code:"TRPARD", name: "TRAPPE ARRIERE DROITE" },
      { id: "56", code:"TRPAVG", name: "TRAPPE AVANT GAUCHE" },
      { id: "57", code:"TRPAVD", name: "TRAPPE AVANT DROITE" },
    ],
  }
  
  export const useLocationFilter = defineStore({
    id: 'locationFilter',
    state: (): StateLocationFilter => {
      return JSON.parse(JSON.stringify(initialStateLocationFilter));
    },
  })

  

interface StateSeverityFilter {
    data: Severity[] | null,
}
interface Severity{
    key: string;
    name: string;
    color: string
}

const initialStateSeverityFilter = {
    data: [
        {hey: "SEV0", name:"Inconnue", color:"Pink"},
        {hey: "SEV1", name:"Frottement ou léger défaut d'aspect", color:"Yellow"},
        {hey: "SEV2", name:"Réparation rapide", color:"Light blue"},
        {hey: "SEV2", name:"Peinture", color:"Blue"},
        {hey: "SEV4", name:"Tolerie peinture", color:"Red"},
        {hey: "SEV5", name:"Remplacement", color:"Black"}
    ]
}

  export const useSeverityFilter = defineStore({
    id: 'severityFilter',
    state: (): StateSeverityFilter => {
      return JSON.parse(JSON.stringify(initialStateSeverityFilter));
    },
  })