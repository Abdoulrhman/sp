import apiInstance from "./axiosInstance";

// Login function
export const studentLogin = async (username: string, password: string) => {
  try {
    const response = await apiInstance.post("/Account/StudentLogin", {
      UserName: username, // Updated key from phone to UserName
      Password: password,
    });

    // Assuming the token is returned in the response data under "token"
    const { token } = response.data.Data;

    // Store the token in localStorage
    if (token) {
      localStorage.setItem("token", token);
    }

    return response.data; // Assuming the response contains user data or token
  } catch (error: any) {
    throw error.response ? error.response.data : new Error("Login failed");
  }
};
export const getStudentExams = async () => {
  try {
    const response = await apiInstance.get("/Exam/GetStudentExams");

    // Assuming the response data contains the exam data
    return response.data;
  } catch (error: any) {
    throw error.response
      ? error.response.data
      : new Error("Failed to fetch exams");
  }
};

export const checkSkillsExamsAvailability = async () => {
  try {
    const response = await apiInstance.get(
      "/Exam/CheckSkillsExamsAvailability"
    );

    // Assuming the response data contains the availability information
    return response.data;
  } catch (error: any) {
    throw error.response
      ? error.response.data
      : new Error("Failed to check skills exams availability");
  }
};
