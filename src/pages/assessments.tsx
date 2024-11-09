/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { getStudentExams } from "../api/adminApis";

const Assessments: React.FC = () => {
  const [exams, setExams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const examData = await getStudentExams();
        if (Array.isArray(examData) && examData.length > 0) {
          setExams(examData);
        } else {
          setExams([]); // Set exams to an empty array if no data is returned
        }
      } catch (err: any) {
        setError(err.message || "Failed to load exams");
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  const handleCardClick = (examId: string) => {
    navigate(`/details/${examId}`);
  };

  return (
    <>
      <div className="assessment-wrapper h-[100vh]">
        <Header leftChildren={<p>Available Assessments</p>} />
        <div className="assessment-grid">
          {loading && <p>Loading assessments...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && exams.length === 0 && (
            <p>No assessments available at this time.</p>
          )}
          {!loading &&
            !error &&
            exams.length > 0 &&
            exams.map((exam, index) => (
              <div key={index} className="assessment-item">
                <div className="img-wrapper">
                  <img src="/assets/assessment/assess.svg" alt="Assessment" />
                </div>
                <p>{exam.title || "Assessment Title"}</p>
                <button onClick={() => handleCardClick(exam.instance)}>
                  View Details
                </button>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Assessments;
