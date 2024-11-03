import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PreLogin: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Students");
  const navigation = useNavigate();

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    navigation(`/login?role=${item}`);  
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-3/4 max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          WORDS ABOUT OUR PLATFORM
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex justify-center gap-8">
          <div
            onClick={() => handleSelect("Students")}
            className={`flex flex-col items-center w-40 h-48 bg-gray-100 border-2 rounded-lg p-4 cursor-pointer ${
              selectedItem === "Students" ? "border-purple-500" : "border-gray-300"
            }`}
          >
            <img
              src="/assets/login/students.png" // Replace with actual image source
              alt="Students"
              className="mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">Students</h3>
          </div>
          <div
            onClick={() => handleSelect("Schools")}
            className={`flex flex-col items-center w-40 h-48 bg-gray-100 border-2 rounded-lg p-4 cursor-pointer ${
              selectedItem === "Schools" ? "border-purple-500" : "border-gray-300"
            }`}
          >
            <img
              src="/assets/login/school.png" // Replace with actual image source
              alt="Schools"
              className="mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">Schools</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLogin;