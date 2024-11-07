import React, { useState } from "react";
import SideBar from "./SideBar";

const studentData = [
  {
    id: 1,
    studentName: "Ipratropium Bromide",
    email: "rpounds0@nih.gov",
    gender: "Female",
    age: "18",
    nationality: "Azerbaijan",
  },
  {
    id: 2,
    studentName: "ALUMINUM SULFATE",
    email: "ebaldazzi1@yelp.com",
    gender: "Female",
    age: "36",
    nationality: "Peru",
  },
  {
    id: 3,
    studentName: "Glipizide",
    email: "cfebry2@youtube.com",
    gender: "Male",
    age: "40",
    nationality: "Russia",
  },
];

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState(studentData);
  const [filteredData, updateFilteredData] = useState(studentData);
  const [isSideBarToggled, setIsSideBarToggled] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = students.filter(
      (student) =>
        student.studentName.toLowerCase().includes(term) ||
        student.email.toLowerCase().includes(term) ||
        student.nationality.toLowerCase().includes(term)
    );
    updateFilteredData(filtered);
  };

  const handleDelete = (studentId) => {
    const updatedUsers = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(filteredData);

    const updatedFilteredData = filteredData.filter(
      (student) => student.id !== studentId
    );
    updateFilteredData(updatedFilteredData);
  };

  return (
    <div>
    {isSideBarToggled && (
      <div className="mobile-side-nav">
        <SideBar />
      </div>
    )}
    <div className=""></div>
  </div>
  )
};

export default StudentDashboard;
