import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSchoolSearch } from "../hooks/useSchoolSearch";
import { downloadStudentsFile } from "../api/adminApis";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useGradeSearch } from "../hooks/useGradesSearch";

export function StudentFilePage() {
  const methods = useForm(); // Use React Hook Form's `useForm`
  const { watch } = methods;
  const [isStudentFileDownloading, setIsStudentFileDownloading] =
    useState(false);

  // Fetch schools using hook
  const {
    schools,
    isLoading: isLoadingSchools,
    error: schoolError,
  } = useSchoolSearch();

  // Fetch grades using hook
  const {
    grades,
    isLoading: isLoadingGrades,
    error: gradeError,
  } = useGradeSearch();

  const selectedGrade = watch("gradeId");
  const selectedSchool = watch("schoolId");

  // Handle student file download
  const handleStudentFileDownload = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission

    if (!selectedSchool || !selectedGrade) {
      alert("Please select a school and grade before downloading.");
      return;
    }

    setIsStudentFileDownloading(true);
    try {
      await downloadStudentsFile(selectedGrade, selectedSchool); // Download API call
      alert("Student file downloaded successfully!");
    } catch (error) {
      console.error("Error downloading student file:", error);
      alert("Failed to download student file. Please try again.");
    } finally {
      setIsStudentFileDownloading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen mt-5">
      {/* Header */}
      <Header
        leftChildren={
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/about">Contact Us</a>
            </li>
          </ul>
        }
        rightChildren={
          <div className="flex gap-4">
            <div className="header-circle"></div>
          </div>
        }
      />

      {/* Main Content */}
      <main className="flex-grow">
        <FormProvider {...methods}>
          <form
            onSubmit={handleStudentFileDownload}
            className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Column 1: Select School and Grade */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Select Filters</h2>

              {/* Grade Dropdown */}
              <div className="space-y-1">
                <label htmlFor="grade" className="block text-sm font-medium">
                  Grade
                </label>
                <select
                  id="grade"
                  {...methods.register("gradeId")}
                  className="w-full border rounded p-2 bg-gray-100"
                  disabled={isLoadingGrades}
                >
                  <option value="">Select grade</option>
                  {grades.map((grade) => (
                    <option key={grade.Id} value={grade.Id}>
                      {grade.NameEn}
                    </option>
                  ))}
                </select>
                {isLoadingGrades && (
                  <p className="text-sm text-gray-500">Loading grades...</p>
                )}
                {gradeError && (
                  <p className="text-sm text-red-500">{gradeError}</p>
                )}
              </div>

              {/* School Dropdown */}
              <div className="space-y-1">
                <label htmlFor="school" className="block text-sm font-medium">
                  School
                </label>
                <select
                  id="school"
                  {...methods.register("schoolId")}
                  className="w-full border rounded p-2 bg-gray-100"
                  disabled={isLoadingSchools}
                >
                  <option value="">Select school</option>
                  {schools.map((school) => (
                    <option key={school.Id} value={school.Id}>
                      {school.NameEn}
                    </option>
                  ))}
                </select>
                {isLoadingSchools && (
                  <p className="text-sm text-gray-500">Loading schools...</p>
                )}
                {schoolError && (
                  <p className="text-sm text-red-500">{schoolError}</p>
                )}
              </div>

              {/* Download Student File Button */}
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded text-white ${
                  isStudentFileDownloading || !selectedGrade || !selectedSchool
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#a883f3] hover:bg-purple-500"
                }`}
                disabled={
                  isStudentFileDownloading || !selectedGrade || !selectedSchool
                }
              >
                {isStudentFileDownloading
                  ? "Downloading..."
                  : "Download Student File"}
              </button>
            </div>
          </form>
        </FormProvider>
      </main>

      {/* Footer */}
      <Footer className="mt-auto" />
    </div>
  );
}
