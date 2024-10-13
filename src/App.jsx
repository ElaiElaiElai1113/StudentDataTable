import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterStudentTable from "./components/FilterStudentTable";
import SearchBar from "./components/SearchBar";
import StudentTable from "./components/StudentTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FilterStudentTable>
        <SearchBar />
        <StudentTable />
      </FilterStudentTable>
    </>
  );
}

export default App;
