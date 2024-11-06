import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";

const Assessments: React.FC = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/details");
  };

  return (
    <>
      <div className="assessment-wrapper">
        <Header leftChildren={<p>Avilabale Assessments</p>} />
        <div className="assessment-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="assessment-item">
              <div className="img-wrapper">
                <img src="/assets/assessment/assess.svg" alt="Assessment" />
              </div>
              <p>September</p>
              <button onClick={handleCardClick}>Assessment Title</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Assessments;
