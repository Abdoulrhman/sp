import React from "react";
import { useNavigate } from "react-router-dom";

const Assessments: React.FC = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/details");
  }

  return (
    <div className="assessment-wrapper">
      <div className="assessment-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="assessment-item" >
            <div className="img-wrapper">
              <img src="/assets/assessment/assess.svg" alt="Assessment" />
            </div>
            <p>September</p>
            <button onClick={handleCardClick} >Assessment Title</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessments;
