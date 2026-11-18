import { useGrist } from "grist-widget-sdk";
import { useState, useEffect } from "react";
import * as React from "react";
import PkoGrid from "./components/PkoGrid";
import "react-datasheet-grid/dist/style.css";
import { Button } from "@codegouvfr/react-dsfr/Button";

import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
} from "react-datasheet-grid";

import { Select } from "@base-ui/react/select";

export default function App() {
  // appel du contexte Grist
  const w = useGrist();
  console.log("w =", w);

  // variables PKO
  const [selectedPKO, setSelectedPKO] = useState(null); // l'id du pko actif

  const pkoCourant = w.records?.find((pko) => pko.id === selectedPKO); // tout l'objet du pko actif

  const pko_liste_select = (w.records ?? []).map((record) => ({
    value: record.id,
    label: record.B_pko_date,
  }));

  // variables du tableau des agents
  const [agents, setAgents] = useState([]);
  console.log("agents =", agents);

  const agents_id_pko_courant =
  pkoCourant?.agents_ID ?? [];

  const agentsDuPKO =
  agents.filter(
    agent => agent.PKO_ID === selectedPKO
  );
  console.log("agentsDuPKO =", agentsDuPKO);

  const columns = [
    { ...keyColumn("nom", textColumn), title: "nom" },
    { ...keyColumn("prenom", textColumn), title: "Prénom" },
    { ...keyColumn("insee", textColumn), title: "insee" },
  ];

  const tableau_agents_lignes = (agentsDuPKO ?? []).map((agent) => ({
    nom: agent.B_agent_nom,
    prenom: agent.B_agent_prenom,
    insee: agent.B_agent_insee,
  }));


  // useEffect pour charger les agents du pko courant
  useEffect(() => {

    if (!w.isReady) {
      return;
    }

    async function chargerAgents() {
      const rows = await w.fetchTableRows("Agents");
      setAgents(rows);
    }

    chargerAgents();

  }, [w.isReady]);

  
  // chargement des données du tableau des agents
  const pkos = (w.records ?? []).map((record) => ({
    nom: record.B_pko_date,
    date: record.B_pko_date,
    type: record.B_pko_type,
  }));

  // fonction de demo pour la mise à jour du tableau des agents
  function setData(newData) {
    console.log("newData =", newData);
  }

      {/*  */}

  return (
    <>
      <h1>TEST</h1>
      <select
        value={selectedPKO ?? ""}
        onChange={e =>
          setSelectedPKO(Number(e.target.value))
        }
      >
        <option value="">
          Choisir un PKO
        </option>

        {pko_liste_select.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <p>
        PKO sélectionné : {selectedPKO}
      </p>

      <DataSheetGrid
        lockRows
        value={tableau_agents_lignes}
        onChange={(newValue) => setData(newValue)}
        columns={columns}
      />

    </>
  );
}
