import { educationHist } from "../../../public/constants";
import "./educationHist.scss";
const EducationHist = () => {
  return (
    <div className="experience eduContainer">
      <div className="timeline edu">
        {educationHist.map((edu, index) => {
          console.log("job", edu);
          if (!edu?.title || !edu?.description) return [];
          return (
            <div className="job" key={`job-${index}`}>
              <div className="circle"></div>
              <div className="job_details">
                <div className="job_title">{edu?.title}</div>
                <div
                  className="job_description"
                  dangerouslySetInnerHTML={{ __html: edu?.description }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EducationHist;
