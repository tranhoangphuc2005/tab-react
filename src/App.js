import Info from "./Components/Info";
import axios from "axios";
import { useEffect, useState } from "react";

let url = "https://course-api.com/react-tabs-project";

function App() {
  const [tabs, setTab] = useState();

  useEffect(() => {
    getTabAPI();
  }, []);

  const getTabAPI = async () => {
    let res = await axios.get(url);
    setTab(res.data);
  };

  return (
    <>
      <Info tabs={tabs}></Info>
    </>
  );
}

export default App;
