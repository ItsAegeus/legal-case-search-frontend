import { useState } from "react";
import SearchForm from "./components/SearchForm";
import CaseList from "./components/CaseList";

const App = () => {
  const [cases, setCases] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <SearchForm setCases={setCases} />
      <CaseList cases={cases} />
    </div>
  );
};

export default App;
