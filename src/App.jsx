import { useState } from "react";
import "./App.css";
import "./index.css";
import FilterStudentTable from "./components/FilterStudentTable";
import SearchBar from "./components/SearchBar";
import StudentTable from "./components/StudentTable";

const students = [
  {
    id: 1,
    lastName: "De Los Santos",
    firstName: "Elijah",
    course: "IS",
    birthDate: "2002/12/19",
    occupation: 1,
  },
  {
    id: 2,
    lastName: "Dela Rosa",
    firstName: "Vanne",
    course: "IS",
    birthDate: "2003/10/18",
    occupation: 1,
  },

  {
    id: 3,
    lastName: "Fernandez",
    firstName: "Vince",
    course: "IT",
    birthDate: "2004/01/15",
    occupation: 1,
  },
  {
    id: 4,
    lastName: "Gomez",
    firstName: "Renz",
    course: "DS",
    birthDate: "2001/05/25",
    occupation: 1,
  },
  {
    id: 5,
    lastName: "Urquia",
    firstName: "Paulo",
    course: "CS",
    birthDate: "2005/06/25",
    occupation: 1,
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const filteredStudents = students.filter((student) => {
    const birthDate = new Date(student.birthDate);
    const calculatedAge = new Date().getFullYear() - birthDate.getFullYear();
    const min = new Date(minDate);
    const max = new Date(maxDate);

    const isAgeMatch = calculatedAge.toString() === query;

    return (
      (!minDate || birthDate >= min) &&
      (!maxDate || birthDate <= max) &&
      (student.lastName.toLowerCase().includes(query.toLowerCase()) ||
        student.firstName.toLowerCase().includes(query.toLowerCase()) ||
        student.course.toLowerCase().includes(query.toLowerCase()) ||
        student.birthDate.toLowerCase().includes(query.toLowerCase()) ||
        isAgeMatch)
    );
  });

  // Reset dates
  const clearDates = () => {
    setMinDate("");
    setMaxDate("");
  };

  return (
    <>
      <h1>Student Management System</h1>
      <FilterStudentTable>
        <SearchBar
          query={query}
          setQuery={setQuery}
          minDate={minDate}
          setMinDate={setMinDate}
          maxDate={maxDate}
          setMaxDate={setMaxDate}
          clearDates={clearDates}
        />
        <StudentTable students={filteredStudents} />
      </FilterStudentTable>
    </>
  );
}

export default App;
