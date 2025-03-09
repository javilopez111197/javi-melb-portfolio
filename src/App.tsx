import { useState } from "react";
import Header from "./header/header";
import Body from "./body/body";
import "./App.scss";
import { redirecTabs } from "./body/tabSystem/tabs";

const App = () => {
  const [activeTab, setActiveTab] = useState<redirecTabs>("aboutMe");
  const [isExpEdu, setIsExpEdu] = useState<boolean>(false);

  const handleTabChange = (tab: redirecTabs) => {
    setActiveTab(tab);
  };
  const handleIsExpEdu = () => {
    setIsExpEdu(!isExpEdu);
  };
  return (
    <>
      <Header className="header" onTabChange={handleTabChange} />
      <Body
        activeTab={activeTab}
        onTabChange={handleTabChange}
        handleIsExpEdu={handleIsExpEdu}
        isExpEdu={isExpEdu}
      />
    </>
  );
};
export default App;
