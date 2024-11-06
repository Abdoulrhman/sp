import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useNavigate } from "react-router-dom";

const AssessmentsDetails: React.FC = () => {
  const navigate = useNavigate();
  const handleAssessmentClick = () => {
    console.log("Assessment Clicked");
    navigate("/questions");
  };
  return (
    <div className="mt-5">
      <Header leftChildren={<p>Avilabale Assessments</p>} />
      <div className="assessments-details-wrapper">
        <p className="title-assessment">Title About Assessment</p>
        <div className="details-main">
          <div className="left-side">
            <img src="/assets/assessment/green-arrow.svg" alt="Assessment" />
            <div className="txt-container txt-container-green">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className="middle-clock">
            <div className="clock-img">
              <img src="/assets/assessment/clock.svg" alt="Clock" />
            </div>
            <div className="icon-bg hear-icon" onClick={handleAssessmentClick}>
              <img src="/assets/assessment/hearing.svg" alt="Hearing" />
              <p className="icon-text">
                Listening
                <br />
                الاستماع
              </p>
            </div>
            <div className="icon-bg mic-icon" onClick={handleAssessmentClick}>
              <img src="/assets/assessment/mic.svg" alt="Mic" />
              <p className="icon-text">
                Speaking
                <br />
                التحدث
              </p>
            </div>
            <div className="icon-bg dic-icon" onClick={handleAssessmentClick}>
              <img src="/assets/assessment/dictionary.svg" alt="Dictionary" />
              <p className="icon-text">
                Reading
                <br />
                القراءة
              </p>
            </div>
            <div className="icon-bg edit-icon" onClick={handleAssessmentClick}>
              <img src="/assets/assessment/edit.svg" alt="Edit" />
              <p className="icon-text">
                Writing
                <br />
                الكتابة
              </p>
            </div>
          </div>
          <div className="right-side">
            <img src="/assets/assessment/dark-arrow.svg" alt="Assessment" />
            <div className="txt-container txt-container-dark">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AssessmentsDetails;
