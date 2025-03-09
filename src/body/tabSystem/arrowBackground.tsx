import arrowTab from "../../public/arrowTab.svg";

interface Props {
  className: string;
}
export const ArrowBackground = ({ className }: Props) => {
  return (
    <>
      <img
        // style={{ display: "none" }}
        className={className}
        src={arrowTab}
        alt="Arrow Tab"
      ></img>
      <img
        // style={{ display: "none" }}
        className={className}
        src={arrowTab}
        alt="Arrow Tab"
      ></img>
      <img
        // style={{ display: "none" }}
        className={className}
        src={arrowTab}
        alt="Arrow Tab"
      ></img>
    </>
  );
};
