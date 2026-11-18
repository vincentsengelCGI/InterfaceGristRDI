import Navigation from "./components/Layout/Navigation";
import Workspace from "./components/Layout/Workspace";
import Header from "./components/Layout/Header";
import { useState } from "react";
import 'react-datasheet-grid/dist/style.css'
import "./App.css";


export default function App() {
  const [tab, setTab] = useState("fiche");
  const [currentPko, setCurrentPko] = useState(1);
  const [currentAgent, setCurrentAgent] = useState(null);
  const [Pko, setPko] = useState(
    [
      {
        id: 0,
        nom: "Janvier 2026",
        etat: "actif"
      },
      {
        id: 1,
        nom: "Fevrier 2026",
        etat: "annule"
      },
      {
        id: 2,
        nom: "Mars 2026",
        etat: "termine"
      },
      {
        id: 3,
        nom: "Avril 2026",
        etat: "actif"
      },
    ]
  );
    const [Agents, setAgents] = useState(
    [
      {
        id: 0,
        nom: "Doe",
        prenom: "John",
        pko: 0,
        etat: "actif"
      },
      {
        id: 1,
        nom: "Doe",
        prenom: "Jane",
        pko: 1,
        etat: "actif"
      },
      {
        id: 2,
        nom: "Durand",
        prenom: "John",
        pko: 0,
        etat: "actif"
      },
      {
        id: 3,
        nom: "Dupond",
        prenom: "Jane",
        pko: 1,
        etat: "actif"
      },
      {
        id: 4,
        nom: "Dupont",
        prenom: "John",
        pko: 2,
        etat: "actif"
      },
      {
        id: 5,
        nom: "Martin",
        prenom: "Jane",
        pko: 3,
        etat: "actif"
      },
    ]
  );

  console.log("Pko : ", Pko);
  console.log("tab : ", tab);

  return (
    <>
      <Header />
      <div className="principal">
        <div className="navigation-laterale">
          <Navigation  
            setCurrentPko={ setCurrentPko } 
            setCurrentAgent={ setCurrentAgent } 
            currentAgent={ currentAgent }
            tab={ tab } 
            pko={ Pko } 
            agents={ Agents } 
            currentPko={ currentPko }
          />
        </div>
        <Workspace 
          setTab={ setTab  } 
          tab={ tab } 
          pko={ Pko } 
          agents={ Agents } 
          currentPko={ currentPko }
        />
      </div>
    </>
  );
} 