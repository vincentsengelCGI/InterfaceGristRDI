import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Button } from "@codegouvfr/react-dsfr/Button";

export default function agentsList({ setCurrentAgent, currentAgent, currentPko, agents }) {
  const lignes_pko = agents.flatMap(
    (agent_actuel) => (
        agent_actuel.pko === currentPko) ? (
            { 
                nom: agent_actuel.nom, 
                prenom: agent_actuel.prenom, 
                pko_id: agent_actuel.pko, 
                agent_id: agent_actuel.id
            }
        ) : [] )

  const lookup = {
      "actif": "new",
      "annule": null,
      "termine": "success",
  };
  const Liste = () => {
    return lignes_pko.map((agents_elt) => (
      <li key={agents_elt.agent_id}>
        <Button
          onClick={setCurrentAgent(agents_elt.agent_id)}
        >
            {agents_elt.nom}
        </Button>
        <Tag  
          iconId="fr-icon-file-text-fill"
          nativeButtonProps={{ onClick: function noRefCheck() {setCurrentAgent(agents_elt.agent_id)}, }}
          pressed={ (currentAgent === agents_elt.agent_id).toString() }
        >
            <Badge 
                severity={ lookup[agents_elt.etat] }
            >
                {agents_elt.nom}
            </Badge>
        </Tag>
      </li>
    ));
  };

  return (
    <ul>
      <Liste />
    </ul>
  );
}
