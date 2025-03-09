import { redirecTabs } from "../body/tabSystem/tabs";
import "./header.scss";

interface Props {
  className: string;
  onTabChange: (tabs: redirecTabs) => void;
}
const Header = ({ className, onTabChange }: Props) => {
  const handleContactClick = () => {
    onTabChange("contactMe");
  };
  return (
    <div className={className}>
      <nav className="header-nav">
        <button className="contactMe" onClick={handleContactClick}>
          Contact Me
        </button>
      </nav>
    </div>
  );
};
export default Header;
