import { useState } from "react";
import axios from "axios";

const SearchForm = ({ setCases }) => {
  const [scenario, setScenario] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get("http://127.0.0.1:8000/search", {
        params: { scenario },
      });
      setCases(response.data.cases);
    } catch (error) {
      console.error("Error fetching cases:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h1 className="text-xl font-bold mb-2">Search Legal Cases</h1>
      <form onSubmit={handleSearch} className="space-y-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="3"
          placeholder="Enter a legal scenario..."
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Cases"}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
