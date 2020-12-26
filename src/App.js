import Info from "./Components/Info";
import axios from "axios";
import { useEffect, useState } from "react";

let url = "https://course-api.com/react-tabs-project";

function App() {
  const [tabs, setTab] = useState([]);

  useEffect(() => {
    getTabAPI();
  }, []);

  const getTabAPI = async () => {
    let res = await axios.get(url);
    const newData = res.data.map((v) => ({ ...v, isOpen: false }));
    setTab(newData);
  };

  const changeIsOpen = (id) => {
    const newTabs = [...tabs];
    const newData = newTabs.map((tab) => {
      if (tab.id === id) {
        tab.isOpen = !tab.isOpen;
      }
      return tab;
    });
    setTab(newData);
  };

  return (
    <>
      <Info tabs={tabs} changeIsOpen={changeIsOpen}></Info>
    </>
  );
}

export default App;
