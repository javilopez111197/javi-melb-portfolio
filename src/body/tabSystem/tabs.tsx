import Content from "../contentSystem/content";
import { ArrowBackground } from "./arrowBackground";
import filterIcon from "../../public/filterIcon.svg";
import "./tabs.scss";

export type redirecTabs =
  | "aboutMe"
  | "experience"
  | "education"
  | "projects"
  | "contactMe";

type TabsProps = {
  activeTab: redirecTabs;
  onTabChange: (tab: redirecTabs) => void;
  isExpEdu: boolean;
  handleIsExpEdu: () => void;
};
const Tabs = ({
  activeTab,
  onTabChange,
  isExpEdu,
  handleIsExpEdu,
}: TabsProps) => {
  const handleTabs = (type: redirecTabs) => {
    onTabChange(type);
  };

  return (
    <div className="tabs">
      <nav className="tabs-navigation">
        <button onClick={() => handleTabs("aboutMe")}>
          <ArrowBackground className="arrowTabBackground"></ArrowBackground>
          About me
        </button>
        <button
          onClick={handleIsExpEdu}
          className={`expEduButton ${isExpEdu ? "open" : ""}`}
        >
          <ArrowBackground className="arrowTabBackground"></ArrowBackground>
          Experience & education
          <img className="filterIcon" src={filterIcon} alt="Filter Icon"></img>
        </button>
        {isExpEdu && (
          <div className={`expEduButton sub-buttons ${isExpEdu ? "open" : ""}`}>
            <button onClick={() => handleTabs("experience")}>
              <ArrowBackground className="arrowTabBackground"></ArrowBackground>
              Professional Experience
            </button>
            <button onClick={() => handleTabs("education")}>
              <ArrowBackground className="arrowTabBackground"></ArrowBackground>
              Education History
            </button>
          </div>
        )}
        <button onClick={() => handleTabs("projects")}>
          <ArrowBackground className="arrowTabBackground"></ArrowBackground>
          Projects
        </button>
      </nav>
      <Content activeTab={activeTab}></Content>
    </div>
  );
};
export default Tabs;
