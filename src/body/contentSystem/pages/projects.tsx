import { projects } from "../../../public/constants";
import "./projects.scss";
const Projects = () => {
  return (
    <div className="cards">
      {projects.map((proj, index) => {
        return (
          <div className="card">
            <img alt="projImg" className="projImg" src={proj?.imgUrl}></img>
            <div className="title">{proj?.title}</div>
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: proj?.description }}
            ></div>
            <div className="tech">{proj?.technologies}</div>
            <a
              href={proj?.url}
              className="url"
              rel="noreferrer"
              target="_blank"
            >
              {proj?.textUrl}
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
