import { useState } from "react";
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
} from 'react-datasheet-grid'

export default function TabPko({ agents, pko, currentPko }) {
console.log("agents : ", agents)
console.log("currentPko : ", currentPko)
const Example = () => {

  const columns = [
    { ...keyColumn('nom', textColumn), title: 'nom', disabled: true },
    { ...keyColumn('prenom', textColumn), title: 'prenom', disabled: true },
  ]

  const lignes_pko = agents.flatMap(
    (agent_actuel, index) => (
        agent_actuel.pko === currentPko) ? (
            { 
                nom: agent_actuel.nom, 
                prenom: agent_actuel.prenom, 
                pko_id: agent_actuel.pko, 
                agent_id: index
            }) : [] )

  return (
    <DataSheetGrid
      value={lignes_pko}
      onActiveCellChange={ ((e) => e.cell ? console.log(e) : null)}
      columns={columns}
      gutterColumn={ false }
      addRowsComponent={ false }
      height={500}
      rowHeight={30} 

    />
  )
}

  return (
    <Example
        
    />
  );
}
