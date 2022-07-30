import { useEffect, useState } from "react";

const people = ["Shashi Koshy", "Dhriti Taneja", "Dipa Mishra"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(people);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const result = people.filter((names) =>
      names.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <ul>
        {searchTerm !== "" && searchResult.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
