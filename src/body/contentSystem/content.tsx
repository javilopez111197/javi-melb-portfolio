import { redirecTabs } from "../tabSystem/tabs";
import {
  AboutMe,
  ProfessionalExp,
  EducationHist,
  Projects,
  ContactMe,
} from "./pages/_index";
import "./content.scss";

type Props = {
  activeTab: redirecTabs;
};
const Content = ({ activeTab }: Props) => {
  let content;
  switch (activeTab) {
    case "aboutMe":
      content = <AboutMe />;
      break;
    case "experience":
      content = <ProfessionalExp />;
      break;
    case "education":
      content = <EducationHist />;
      break;
    case "projects":
      content = <Projects />;
      break;
    case "contactMe":
      content = <ContactMe />;
  }
  return <div className="contentContainer">{content}</div>;
};
export default Content;
