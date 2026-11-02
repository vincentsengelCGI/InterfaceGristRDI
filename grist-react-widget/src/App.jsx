import { useEffect, useState } from "react";
import grist from "grist-widget-sdk";

function App() {

  const [record, setRecord] = useState(null);

  useEffect(() => {

    grist.ready();

    grist.onRecord(record => {
      setRecord(record);
    });

  }, []);

  return (
    <pre>
      {JSON.stringify(record, null, 2)}
    </pre>
  );
}

export default App;