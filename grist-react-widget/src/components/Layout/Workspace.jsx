import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import TabAgent from "../Tabs/TabAgent";   
import TabCourrier from "../Tabs/TabCourrier";
import TabPko from "../Tabs/TabPko";


export default function Workspace({ setTab, agents, pko, currentPko }) {
  return (
    <div className="workspace">
      <Tabs
        tabs={[
          {
            label: "PKO",
            content: <TabPko agents={ agents } pko={ pko } currentPko={ currentPko }/>,
            isDefault: true,
          },
          {
            label: "Agents",
            content: <TabAgent />,
          },
          { 
            label: "Courriers", 
            content: <TabCourrier />,
          },
        ]}

        onTabChange={(currentTab) => {
            console.log(`Tab changed to currentTab: ${currentTab.tab.label}`);
            if (currentTab.tabIndex === 0) {
                setTab("pko")
            } else {
                setTab("agent")
            }
        }}
      />
    </div>
  );
}
