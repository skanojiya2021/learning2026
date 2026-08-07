import "./styles.css";
import { useState } from "react";
const users = ["Alice", "Bob", "Charlie", "David", "Emma"];

export default function App() {
  const [search, setSearch] = useState("");
  const filterValue = users.filter((user) => {
    return user.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="App">
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filterValue.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}
