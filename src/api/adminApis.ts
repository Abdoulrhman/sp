import apiInstance from "./axiosInstance";

// Login function
export const studentLogin = async (username: string, password: string) => {
  try {
    const response = await apiInstance.post("/Account/StudentLogin", {
      UserName: username, // Updated key from phone to UserName
      Password: password,
    });

    // Assuming the token is returned in the response data under "token"
    const { token } = response.data;

    // Store the token in localStorage
    if (token) {
      localStorage.setItem("token", token);
    }

    return response.data; // Assuming the response contains user data or token
  } catch (error: any) {
    throw error.response ? error.response.data : new Error("Login failed");
  }
};
