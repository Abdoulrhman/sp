import React from "react";

const Assessments: React.FC = () => {
  return (
    <div className="assessment-wrapper">
      <div className="assessment-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="assessment-item">
            <div className="img-wrapper">
              <img src="/assets/assessment/assess.svg" alt="Assessment" />
            </div>
            <p>September</p>
            <button>Assessment Title</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessments;
