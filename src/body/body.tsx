import Tabs, { redirecTabs } from "./tabSystem/tabs";
// import Content from "./contentSystem/content";
import "./body.scss";

type BodyProps = {
  activeTab: redirecTabs;
  onTabChange: (tabs: redirecTabs) => void;
  isExpEdu: boolean;
  handleIsExpEdu: () => void;
};

const Body = ({
  activeTab,
  onTabChange,
  isExpEdu,
  handleIsExpEdu,
}: BodyProps) => {
  return (
    <div className="bodyStructure">
      <Tabs
        activeTab={activeTab}
        onTabChange={onTabChange}
        isExpEdu={isExpEdu}
        handleIsExpEdu={handleIsExpEdu}
      />
    </div>
  );
};
export default Body;
