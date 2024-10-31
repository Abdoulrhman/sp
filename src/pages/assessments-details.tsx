import React from "react";

const AssessmentsDetails: React.FC = () => {
  return (
    <div className="assessments-details-wrapper">
      <p className="title-assessment">Title About Assessment</p>
      <div className="details-main">
        <div className="left-side">
          <img src="/assets/assessment/green-arrow.svg" alt="Assessment" />
          <div className="txt-container txt-container-green">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="middle-clock">
          <div className="clock-img">
            <img src="/assets/assessment/clock.svg" alt="Clock" />
          </div>
          <div className="icon-bg hear-icon">
            <img src="/assets/assessment/hearing.svg" alt="Hearing" />
            <p className="icon-text">
              Listening
              <br />
              الاستماع
            </p>
          </div>
          <div className="icon-bg mic-icon">
            <img src="/assets/assessment/mic.svg" alt="Mic" />
            <p className="icon-text">
              Speaking
              <br />
              التحدث
            </p>
          </div>
          <div className="icon-bg dic-icon">
            <img src="/assets/assessment/dictionary.svg" alt="Dictionary" />
            <p className="icon-text">
              Reading
              <br />
              القراءة
            </p>
          </div>
          <div className="icon-bg edit-icon">
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
  );
};

export default AssessmentsDetails;
