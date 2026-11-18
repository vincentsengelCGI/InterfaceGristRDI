import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Badge } from "@codegouvfr/react-dsfr/Badge";


export default function PkoList({ setaccoPko, setCurrentPko, currentPko, pko }) {
  const lookup = {
      "actif": "new",
      "annule": null,
      "termine": "success",
  };
  const Liste = () => {
    return pko.map((pko_elt, index) => (
      <li key={pko_elt.id}>
        <Tag  
          iconId="fr-icon-file-text-fill"
          nativeButtonProps={{ onClick: function noRefCheck() {
            setCurrentPko(index)
        }, }}
          pressed={ (currentPko === index).toString() }
        >
            <Badge 
                severity={ lookup[pko_elt.etat] }
            >
                {pko_elt.nom}
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
