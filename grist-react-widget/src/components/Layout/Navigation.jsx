import PkoList from "../Agents/PkoList";
import AgentList from "../Agents/AgentsList";
import { useState, useEffect } from "react";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import { fr } from "@codegouvfr/react-dsfr";


export default function Navigation({ 
    setCurrentAgent, 
    currentAgent, 
    setCurrentPko, 
    tab, 
    pko, 
    agents, 
    currentPko 
}) {

    console.log("pko : ", pko)
    console.log("tab : ", tab)

    const [accoPko, setaccoPko] = useState(true);

    useEffect(() => {
        console.log("accoPko : ", accoPko)
        return(() =>{
            console.log("tab : ", tab)
            console.log("accoPko : ", accoPko)
            tab === "pko" ? null : setaccoPko(!accoPko)
            console.log("accoPko : ", accoPko)
        })
    }, [currentPko]);

    useEffect(() => {
        return(() =>{
            tab === "pko" ? setaccoPko(true) : setaccoPko(false)
        })
    }, [tab]);

    return(
        <div className={fr.cx("fr-accordions-group")}>
            <Accordion 
                label="Liste des PKO"
                expanded={ !accoPko }
                >
                <div className="accordeonLateral">
                    <PkoList 
                        pko={ pko } 
                        setCurrentPko={ setCurrentPko } 
                        currentPko={ currentPko }
                    />
                </div>
            </Accordion>
            <Accordion 
                label="Liste des agents"
                expanded={ accoPko }
                >
                <div className="accordeonLateral">
                    <AgentList 
                        agents={ agents } 
                        currentPko={ currentPko } 
                        currentAgent={ currentAgent }
                        setCurrentAgent={ setCurrentAgent }
                    />
                    
                </div>
            </Accordion>
        </div>
    )
}